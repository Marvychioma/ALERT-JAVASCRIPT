let yourName = prompt("What is your name?");
let theirName = prompt("What is there name?");
let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore);

if(loveScore <=30){
    alert("The love score for " + yourName + " and " + theirName + " is " + loveScore + "%" + ", It is unwise for you guys to continue this relationship.");

}
else if(loveScore > 30 && loveScore <=50){
    alert("The love score for " + yourName + " and " + theirName + " is " + loveScore + "%" + " put more effort in this relationship");


}
else if(loveScore > 50 && loveScore <= 80){
    alert("The love score for " + yourName + " and " + theirName + " is " + loveScore + "%" + " WOW!! Love is a beautiful thing, you guys rock!!!");



}
else {
    alert("The love score for " + yourName + " and " + theirName + " is " + loveScore + "%" + "Perfect Duo. We Expect your Wedding card!!! Because this love will last forever.");

}