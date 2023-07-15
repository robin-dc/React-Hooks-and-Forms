import { useState, useEffect } from "react";
import Message from "./components/Message";
import PictureDisplay from "./components/PictureDisplay";

function App() {
  const [size, setSize] = useState('s');
  const [featherCount, setFeatherCount] = useState(0);
  const [featherColors, setFeatherColors] = useState([]);
  const [isRed, setIsRed] = useState(false);
  const [isOrange, setIsOrange] = useState(false);
  const [isBrown, setIsBrown] = useState(false);
  const [isLightBrown, setIsLightBrown] = useState(false);
  const [isYellow, setIsYellow] = useState(false);
  const [currentSize, setCurrentSize] = useState('medium')

  useEffect(() => {
    // console.log('Color Change :: red?', isRed);
    // console.log('Color Change :: orange?', isOrange);
    // console.log('Color Change :: brown?', isBrown);
    // console.log('Color Change :: light brown?', isLightBrown);
    // console.log('Color Change :: yellow?', isYellow);

    const colors = [];
    if (isRed) colors.push('red');
    if (isOrange) colors.push('orange');
    if (isBrown) colors.push('brown');
    if (isLightBrown) colors.push('light-brown');
    if (isYellow) colors.push('yellow');
    setFeatherColors(colors);
  }, [isRed, isOrange, isBrown, isLightBrown, isYellow]);

  useEffect(() => {
    console.log('PictureDisplay size', size);
    if(size === 's') setCurrentSize('small')
    if(size === 'm') setCurrentSize('medium')
    if(size === 'l') setCurrentSize('large')
    if(size === 'xl') setCurrentSize('xlarge')
}, [size]);

  return (
    <>
      <h1>Turkey Creator</h1>
      <h3 className="button-controls">Set the features of your turkey</h3>

      {/* User controls */}
      <div className="button-controls">
        Size:
        <button onClick={() => setSize('s')} disabled={size === 's' ? true : false}>Small</button>
        <button onClick={() => setSize('m')} disabled={size === 'm' ? true : false}>Medium</button>
        <button onClick={() => setSize('l')} disabled={size === 'l' ? true : false}>Large</button>
        <button onClick={() => setSize('xl')} disabled={size === 'xl' ? true : false}>X-Large</button>
      </div>
      <div className="button-controls">
        Feather Count:
        <input
          type="number"
          onChange={(e) => {
            if(e.currentTarget.value > 10 ) {
              setFeatherCount(10)
            }
            else if(e.currentTarget.value < 0){
              setFeatherCount(0)
            }
            else{
              setFeatherCount(e.currentTarget.value)
            }
          }}
          value={featherCount}
          defaultValue={0}
          min={0}
          max={10}
        />
      </div>
      <div className="button-controls">
        Feather Color(s):
        <label><input
          type="checkbox"
          onChange={(e) => setIsRed(e.currentTarget.checked)}
        />Red</label>
        <label><input
          type="checkbox"
          onChange={(e) => setIsOrange(e.currentTarget.checked)}
        />Orange</label>
        <label><input
          type="checkbox"
          onChange={(e) => setIsBrown(e.currentTarget.checked)}
        />Brown</label>
        <label><input
          type="checkbox"
          onChange={(e) => setIsLightBrown(e.currentTarget.checked)}
        />Light Brown</label>
        <label><input
          type="checkbox"
          onChange={(e) => setIsYellow(e.currentTarget.checked)}
        />Golden Yellow</label>
      </div>

      {/* Generated display based on user selections above */}
      <h3 className="button-controls">Enjoy your turkey</h3>
      <PictureDisplay
        size={currentSize}
        featherCount={featherCount}
        featherColors={featherColors}
      />
     <Message size={currentSize} featherCount={featherCount} />
    </>
  );
}

export default App;
