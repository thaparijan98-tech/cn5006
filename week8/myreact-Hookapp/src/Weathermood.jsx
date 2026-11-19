import { useState, useEffect } from "react"; 
import rainy from "./rainy.webp"; 
import sunny from "./sunny.webp"; 
import cloudy from "./cloudy.webp";
function EmojiCounter({ pic: selectedEmoji }) { 
  const [image, setImage] = useState(rainy); 
  const [count, setCount] = useState(0); 
 
  useEffect(() => { 
    const emojiImages = { 
      rainy, 
      sunny, 
    cloudy, 
    }; 
 
    setImage(emojiImages[selectedEmoji] || rainy); 
  }, [selectedEmoji]); 
 
  const handleClick = () => { 
    setCount((prevCount) => prevCount + 1); 
  }; 
 
  return ( 
    <div className="App">  
      <p> 
        {selectedEmoji} 
        <button type="button" onClick={handleClick}> 
          {count} 
          <img src={image} alt={selectedEmoji} /> 
        </button> 
      </p> 
 
  <p>&nbsp;</p> 
    </div> 
  ); 
} 
 
export default EmojiCounter;