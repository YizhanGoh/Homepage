import React, { useState, useEffect } from "react";
import TodayDate from "./TodayDate";
import Quote from "./Quote";

function App() {

  const [fontColor, setFontColor] = useState("blue");

  useEffect(() => {
    document.body.style.backgroundImage = `url('https://source.unsplash.com/random')`;
  },[]);

  function handleClick() {
    if (fontColor == "white") {
      setFontColor("black");
    } else {
      setFontColor("white");
    };
    console.log("clicked");
  };

  return (
    <div onClick={handleClick} style={{color:fontColor}}>
      <TodayDate />
      <Quote />
    </div>
  );
};

export default App;
