const mybutton = document.getElementById("myButton");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
const min = 1;
const max = 6;
let random1;
let random2;
let random3;
mybutton.onclick = function () {
  random1 = Math.floor(Math.random() * max) + min;
  random2 = Math.floor(Math.random() * max) + min;
  random3 = Math.floor(Math.random() * max) + min;
  myLabel3.textContent = random3;
  myLabel1.textContent = random1;
  myLabel2.textContent = random2;
}
