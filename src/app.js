/* eslint-disable */
import "bootstrap";
import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let webDomain = [".com", ".net", ".es", ".io"];
let newDomain = "";

let tgtDomain = document.querySelector("#domain");

window.onload = function() {
  //write your code here
  setDomain();
  tgtDomain.innerHTML = newDomain;
};

const setDomain = () => {
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < webDomain.length; l++) {
          newDomain += pronoun[i] + adj[j] + noun[k] + webDomain[l] + "<br>";
        }
      }
    }
  }

  return newDomain;
};
