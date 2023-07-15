import React from 'react'
import './ProductListItem.css'

function ProductListItem({ product, selectedProduct, onClick }) {
  const isSelected = selectedProduct && selectedProduct.id === product.id;
  console.log("Product List")

  return (
    <div className={`product-list-item ${isSelected ? 'selected' : ''}`}>
      <img className="product-list-item-photo"
           src={product.photo.filename}
           alt={`${product.name}`}
      />
      <button onClick={onClick}>{product.name}</button>
    </div>
  )
}

export default ProductListItem;
