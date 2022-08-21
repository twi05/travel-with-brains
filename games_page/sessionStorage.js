"use strict";
let count = Number(localStorage.getItem("count"));
let cur_date = new Date().getDate();
let session_date;


session_date = Number(localStorage.getItem("date"));

if (session_date === null) {
  localStorage.setItem("date", cur_date);
  localStorage.setItem("count", 0);
  count = 0;
  session_date = cur_date;
}

const games = document.querySelectorAll(".game-card");
const custom_model_main = document.getElementsByClassName('custom-model-main');
const close_btn = document.getElementsByClassName('close-btn');
const bg_overlay = document.getElementsByClassName('bg-overlay');

console.log("close btn", close_btn);
const increase_count = () => {

  if (Number(localStorage.getItem("date")) === cur_date) {
        if (Number(localStorage.getItem("count")) > 5) {
          // alert("You have exhausted your daily limit to play game!");
          
          custom_model_main[0].classList.add("model-open");
         return false;
        }
         else {
          localStorage.setItem("count", Number(localStorage.getItem("count"))+1);
          count++;
          return true;
        }
  } 
  else if (Number(localStorage.getItem("date")) != cur_date) {
        localStorage.setItem("count", 1);
        localStorage.setItem("date", cur_date);
        return true;
  }

};

games.forEach((card) => {
  card.addEventListener("click", increase_count);
});


 close_btn[0].addEventListener('click',  function(){
  custom_model_main[0].classList.remove("model-open");
 })
 
 bg_overlay[0].addEventListener('click',  function(){
  custom_model_main[0].classList.remove("model-open");

 })





 const firstgame = document.getElementById('1');
 firstgame.addEventListener('click', function(){

let open_link = increase_count();
if(open_link)
  location.href ="../games/maze/index.html";
  else
return;

 })

 const secondgame = document.getElementById('2');
 secondgame.addEventListener('click', function(){

let open_link = increase_count();
if(open_link)
  location.href ="../games/quiz/index.html";
  else
return;

 })
 const thirdgame = document.getElementById('3');
 thirdgame.addEventListener('click', function(){

let open_link = increase_count();
if(open_link)
  location.href ="../games/remember\ cards/index.html";
  else
return;

 })