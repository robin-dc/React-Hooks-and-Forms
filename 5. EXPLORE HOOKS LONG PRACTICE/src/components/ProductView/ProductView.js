import React from 'react';
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import './ProductView.css'
import { useState, useEffect } from 'react'

function ProductView({ products }) {

  // TODO: Replace with state variable
  const [sideOpen, setSideOpen] = useState(localStorage.getItem('sidePanel') ? JSON.parse(localStorage.getItem('sidePanel')) : true);
  const [selectedProduct, setSelectedProduct] = useState(null)

  useEffect(() => {
    localStorage.setItem('sidePanel', sideOpen)
  }, [sideOpen])

  useEffect(()=> {
    if(!sideOpen){
      setSelectedProduct(null)
    }
  }, [sideOpen])

  useEffect(()=> {
    if(selectedProduct){
      setSideOpen(true)
    }
  }, [selectedProduct])
  console.log("Product View")
  return (
    <div className="product-view">
      <div className="product-main-area">
        <h1>Products</h1>
        <div className="product-list">
          {products.map(item =>
            <ProductListItem
              key={item.id}
              product={item}
              onClick={() => {
                setSelectedProduct(item)
              }}
              selectedProduct={selectedProduct}
            />
          )}
        </div>
      </div>
      <div className="product-side-panel">
        <div className="product-side-panel-toggle-wrapper">
          <div className="product-side-panel-toggle"
               onClick={() => setSideOpen(prevState => !prevState)}>
            {sideOpen ? '>' : '<'}
          </div>
        </div>
        <ProductDetails visible={sideOpen} product={selectedProduct}/>
      </div>
    </div>
  );
}

export default ProductView;
