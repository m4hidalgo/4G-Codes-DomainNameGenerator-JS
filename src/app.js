/* eslint-disable */
//import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let webDomain = [".com", ".net", ".es", ".io"];
let newDomain = [];

//write your code here
const setDomain = () => {
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < webDomain.length; l++) {
          newDomain.push(pronoun[i] + adj[j] + noun[k] + webDomain[l]);
        }
      }
    }
  }

  return newDomain;
};

setDomain();
console.log(newDomain);
