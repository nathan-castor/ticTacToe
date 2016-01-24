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

// function neverMind(){
//   //on click set the variable box = to a specific square
//   box = this
// }

function isItOpen(x){
  return this.innerText == null
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
      counter++;
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
