import React from "react";

function TodayDate() {

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const currentDate = new Date().toLocaleDateString("en-GB",options);

  return (
    <div>
      <h1 className="today-date"> {currentDate} </h1>
    </div>
  );
};

export default TodayDate;
