function DiceNo(){
    var No=Math.random();
    No=No*6;
    No=Math.floor(No)+1;
    return No;
}
var No1=DiceNo();
var No2=DiceNo();

var RandomDice1="./images/dice"+No1+".png";
var RandomDice2="./images/dice"+No2+".png";

document.querySelector(".img1").setAttribute("src",RandomDice1);
document.querySelector(".img2").setAttribute("src",RandomDice2);

if(No1>No2){
    document.querySelector("h1").innerHTML="Player1 Wins🎉";
}
else if(No2>No1){
    document.querySelector("h1").innerHTML="Player2 Wins🎉";
}
else{
    document.querySelector("h1").innerHTML="🍻Its a Draww🍻";
}
