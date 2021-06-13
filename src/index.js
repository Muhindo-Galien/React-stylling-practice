import React from "react";
import ReactDOM from "react-dom";

var date = new Date();
var time = Math.floor(date.getHours());
var greeting = "";
var CustomSytle = {
  color: ""
};

if (time > 0 && time < 12) {
  CustomSytle.color = "red";
  greeting = "Good morning";
} else if (time > 12 && time < 18) {
  CustomSytle.color = "greed";
  greeting = "Good afternoon";
} else {
  CustomSytle.color = "blue";
  greeting = "Good evening";
}

ReactDOM.render(
  <div>
    <h1 style={CustomSytle}> {greeting}</h1>
  </div>,
  document.getElementById("root")
);
