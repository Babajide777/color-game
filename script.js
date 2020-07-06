
var numofSqaures = 6;
var colors = generateRandom(numofSqaures);

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var resetButton= document.getElementById("reset");
var easyButton= document.getElementById("easy");
var hardButton= document.getElementById("hard");
var h1 = document.querySelector("h1");
var pickedColor = pickColor();


colorDisplay.textContent = pickedColor;


for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", squareClicked);
};

resetButton.addEventListener("click",resetClick);
easyButton.addEventListener("click",easyButtonClick);
hardButton.addEventListener("click",hardButtonClick)




function squareClicked() {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "TRY AGAIN?";
        for (let i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = clickedColor;
        };
        h1.style.backgroundColor = clickedColor;
    }
    else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again!";
    }
};


function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

function generateRandom(num){
    var arr= [];
    for (let i=0; i<num; i++){
        arr.push(rgbNumber());
    }
    return arr;
};


function rgbNumber(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
   var rgb = `rgb(${r}, ${g}, ${b})`;
   return rgb;    
};



function resetClick(){
    colors = generateRandom(numofSqaures);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    this.textContent ="NEW COLORS"
    messageDisplay.textContent = "";
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];          
    };    
    h1.style.backgroundColor = "#32a4a8";
};


function easyButtonClick(){
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numofSqaures = 3;

    colors = generateRandom(numofSqaures);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display= "none";
        }
                  
    };    
    h1.style.backgroundColor = "#32a4a8";

};


function hardButtonClick(){
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    numofSqaures = 6;


    colors = generateRandom(numofSqaures);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display= "block";          
    };    
    h1.style.backgroundColor = "#32a4a8";
    
};