/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let excuse = generateExcuse();
  document.querySelector("#the-excuse").innerHTML = excuse;
};

let generateExcuse = () => {
  let who = [
    "The neighbor's cat",
    "My elderly aunt",
    "The delivery driver",
    "My pet parrot"
  ];
  let action = [
    "knocked over",
    "spilled",
    "accidentally crushed",
    "accidentally broke"
  ];
  let what = ["my assignment", "my phone", "the vase"];
  let when = [
    "while I was preparing for the class",
    "during my morning routine",
    "while I was at the gym",
    "during my lunch break",
    "while I was in a meeting"
  ];
  let whoIndx = Math.floor(Math.random() * who.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let whatIndx = Math.floor(Math.random() * what.length);
  let whenIndx = Math.floor(Math.random() * when.length);

  return (
    who[whoIndx] +
    " " +
    action[actIndx] +
    " " +
    what[whatIndx] +
    " " +
    when[whenIndx]
  );
};
  