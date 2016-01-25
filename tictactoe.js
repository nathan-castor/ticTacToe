var b1 = document.getElementById("b1")
var b2 = document.getElementById("b2")
var b3 = document.getElementById("b3")
var b4 = document.getElementById("b4")
var b5 = document.getElementById("b5")
var b6 = document.getElementById("b6")
var b7 = document.getElementById("b7")
var b8 = document.getElementById("b8")
var b9 = document.getElementById("b9")

var box
var counter = 0
var wins = [
            [1,2,3],
            [4,5,6],
            [7,8,9],
            [1,5,9],
            [3,5,7],
            [1,4,7],
            [2,5,8],
            [3,6,9]
          ]

//**************************-- Variables --************************************
//**************************-- Functions --************************************
b1.addEventListener('click', select)
b2.addEventListener('click', select)
b3.addEventListener('click', select)
b4.addEventListener('click', select)
b5.addEventListener('click', select)
b6.addEventListener('click', select)
b7.addEventListener('click', select)
b8.addEventListener('click', select)
b9.addEventListener('click', select)

function isItOpen(x){
  if (x.innerText == 'X' || x.innerText == 'O') {
    return false
  }else{
    return true
  }
}

function xOrO(x){ //square, player
  if (counter % 2 == 0) {
    x.innerText = 'X'
  }else {
    x.innerText = 'O'
  }
}
function select() {
  //console.log(this)
  var x = this
  if (isItOpen(x)) {
      xOrO(x)
      changeColor(x)
      crapWinner(x.innerText)
      counter++;
      //winner()
  }
}

function changeColor(x){
  if (x.innerText == "X") {
    x.style.backgroundColor = 'yellow';
  }else {
    x.style.backgroundColor = 'red';
  }
}

function resetCSS(x){
  x.style.backgroundColor = 'white'
}
function resetText(x){
  x.innerText = ''
}

function clearAll(){
  var squares = document.querySelectorAll('td')
  for (var i = 0; i < squares.length; i++) {
    resetText(squares[i])
    resetCSS(squares[i])
  }
}

function crapWinner(x){
  if (b1.innerText == x && b2.innerText == x && b3.innerText == x) {
    window.alert("Winner")
  }
  if (b4.innerText == x && b5.innerText == x && b6.innerText == x) {
    window.alert("Winner")
  }
  if (b7.innerText == x && b8.innerText == x && b9.innerText == x) {
    window.alert("Winner")
  }
  if (b1.innerText == x && b4.innerText == x && b7.innerText == x) {
    window.alert("Winner")
  }
  if (b2.innerText == x && b5.innerText == x && b8.innerText == x) {
    window.alert("Winner")
  }
  if (b3.innerText == x && b6.innerText == x && b9.innerText == x) {
    window.alert("Winner")
  }
  if (b1.innerText == x && b5.innerText == x && b9.innerText == x) {
    window.alert("Winner")
  }
  if (b3.innerText == x && b5.innerText == x && b7.innerText == x) {
    window.alert("Winner")
  }
}


// function selectWinner() {
//   //console.log(this)
//   var x = this
//   if (isItOpen(x)) {
//       oneOrEleven(x)
//   }
// }
// function oneOrEleven(x){ //square, player
//   if (counter % 2 == 0) {
//     x.addClass(1)
//   }else {
//     x.addClass(11)
//   }
// }
// var winnerArray = [
//   'b1',''
// ]
// function winner() {
//
// }

//}
// function getPlaces(){
//     var piecePlace = {'X':[],'O':[]};
//     for (var i = 0; i < 9; i++){
//         if (document.getElementsByClassName("square")[i].innerText == 'X'){
//             piecePlace.X[0][i].push(i+1)
//         } else if (document.getElementsByClassName("square")[i].innerText == 'O'){
//             piecePlace.O[0][i].push(i+1)
//         }
//     }
//     console.log(piecePlace.X[0][0])
//     return piecePlace;
// }
// // I'll make the win arrays a dictionary then
// //I'll have to iterate through the X:0 and o:0 and see if it matches
// function winner(){
//   for (var i = 0; i < getPlaces.length; i++) {
//     for (var j = 0; j < wins.length; j++) {
//       if (piecePlace.X[i] == wins[j]) {
//         window.alert("You win!!!")
//       }else if (piecePlace.O[i] == wins[j]) {
//         window.alert("You win!!!")
//       }
//     }
//   }
//}
