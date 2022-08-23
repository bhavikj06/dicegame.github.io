var randomNumber1  = Math.floor((Math.random() * 6) + 1);
var randomDiceimage1 = "dice" + randomNumber1 + ".png"; // choose dice1 - dice6.
var randomImageSource  = "images/" + randomDiceimage1; //find folder.

var image1 =  document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

// for image2 

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var randomDiceimage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceimage2;


var image2 =  document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "player 1 wins!";
} else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}