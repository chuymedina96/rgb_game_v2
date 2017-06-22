var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
];

var squares = document.querySelectorAll(".square");
var pickedColor = pickNumber();
var colorDisplay = document.getElementById("colorDisplay");
var answer = document.getElementById("correct");
colorDisplay.textContent = pickedColor;


for (i = 0; i < squares.length; i++) {
    //event listener
    squares[i].style.backgroundColor = colors[i];
    //event listener
    squares[i].addEventListener("click", function() {
    var clickedColor = this.style.backgroundColor;
        
    if(clickedColor === pickedColor) {
        answer.textContent = ("Correct");
        changeColors(clickedColor);
    }
    else{
        this.style.backgroundColor = "#232323";
        answer.textContent = "Try Again"
    }
    });
}
function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = pickedColor;
    }
}
function pickNumber() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num){
    var arr = [];
    for( var i = 0; i < num.length; i++) {
        
    };
    return arr;
    
}
function randomColor() {
    Math.floor(Math.random() * 266);
    Math.floor(Math.random() * 266);
    Math.floor(Math.random() * 266);
    Math.floor(Math.random() * 266);
    Math.floor(Math.random() * 266);
    Math.floor(Math.random() * 266);
    
    
}