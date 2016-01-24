var upperRight = document.getElementById("upperRight")
var upperMiddle = document.getElementById("upperMiddle")
var upperLeft = document.getElementById("upperLeft")
var middleRight = document.getElementById("middleRight")
var middleMiddle = document.getElementById("middleMiddle")
var middleLeft = document.getElementById("middleLeft")
var lowerRight = document.getElementById("lowerRight")
var lowererMiddle = document.getElementById("lowererMiddle")
var lowerLeft = document.getElementById("lowerLeft")

var playerX = 'X'
var playerY = 'Y'

var counter = 0
//**************************-- Variables --************************************
//**************************-- Functions --************************************
function isItOpen(){
  return square.innerText == null
}

function xOrO(){ //square, player
  if (counter % 2 == 0) {
    square.innerText = 'X'
  }else {
    square.innerText = 'O'
  }
}
function select() {
    if (isItOpen) {
        xOrO
        counter++;
    }
}






middleMiddle.addEventListener('click', selected)
//****************************************************************
var myHeading = document.querySelector('h1')
function clicked(){
        myHeading.innerText = "Flapjacks"
      }
myHeading.addEventListener('click', clicked)
//****************************************************************
