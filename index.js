var randomNumber6 = Math.floor((Math.random() * 6 + 1));
var number1 = "images/dice" + randomNumber6 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", number1);
//e.log(randomNumber6);
var randomNumber6 = Math.floor((Math.random() * 6 + 1));
var number2 = "images/dice" + randomNumber6 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", number2);

if(number1===number2)
{
    document.querySelector("h1").innerHTML="DRAW";
}
else if(number1>number2)
{
    document.querySelector("h1").innerHTML="player 1 Win";
}
else{
    document.querySelector("h1").innerHTML="player 2 Win";
}