
window.onload= function (){
  
const button = document.getElementById('buttonid');
const current = document.getElementById('current');
var colors = ["blue","gray","orange","yellow","black","red","AliceBlue"];

button.addEventListener("click",clickChange);

function clickChange(){
  current.style.backgroundColor = colors[Math.round(Math.random()*7)];

  console.log("hello")
}
}
