
var message;
var dice1;
var dice2;
var diceImage = ["images/dice1.png",'images/dice2.png','images/dice3.png','images/dice4.png','images/dice5.png','images/dice6.png'];


    dice1 = Math.random();
    dice1 = Math.floor(dice1*6);
    document.querySelector(".image1").setAttribute("src", diceImage[dice1]);

    dice2 = Math.random();
    dice2 = Math.floor(dice2*6);
    document.querySelector(".image2").setAttribute("src", diceImage[dice2]);


if (dice1 === dice2) {
    message = "Try again";
} else if (dice1 > dice2) {
    message = "Player 1 won";
    document.querySelector(".p1").style.color = "yellow";
    document.querySelector(".image1").className = "winner";
} else {
    message = "Player 2 won";
    document.querySelector(".p2").style.color = "yellow";
    document.querySelector(".image2").className = "winner";
}

document.querySelector("h2").textContent = message;

document.querySelector(".refresh").setAttribute("onClick", "window.location.reload()")


