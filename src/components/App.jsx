import React, { useState, useEffect } from "react";
import TodayDate from "./TodayDate";
import Quote from "./Quote";

function App() {

  const [fontColor, setFontColor] = useState("white");

  useEffect(() => {
    document.body.style.backgroundImage = `url('https://source.unsplash.com/random/1920x1080')`;
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
