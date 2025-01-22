import React, { useRef } from "react";
import './Style.css'; 
const UseRef = () => {
  
  const Container = useRef(null); 
  const Button = useRef(null);     
  
  
  const changeBgColor = () => {
    if (Container.current) {
      
      const currentColor = Container.current.style.backgroundColor;
      if (currentColor === "blue") {
        Container.current.style.backgroundColor = "white"; 
      } else {
        Container.current.style.backgroundColor = "blue";  
      }
    }
  };

  return (
    <div>
      
      <div
        ref={Container}
        className="container"
        style={{ backgroundColor: "white" }}  
      >
        Container
      </div>

      
      <button
        ref={Button}
        onClick={changeBgColor}
        className="change-color-button"
      >
        Change Background Color
      </button>
    </div>
  );
};

export default UseRef;
