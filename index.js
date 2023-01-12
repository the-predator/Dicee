document.getElementsByClassName('img1')[0].setAttribute('src', "images/dice6.png");
document.getElementsByClassName('img2')[0].setAttribute('src', "images/dice6.png");
document.addEventListener()
function throwDice(){
    var x = Math.floor(Math.random()*6)+1;
var y = Math.floor(Math.random()*6)+1;
document.getElementsByClassName('img1')[0].setAttribute('src', "images/dice"+x+".png");
document.getElementsByClassName('img2')[0].setAttribute('src', "images/dice"+y+".png");
if(x>y)
   {
    document.getElementsByTagName('p')[2].innerHTML="player 1 wins";
   }
else if(y>x)
   {
    document.getElementsByTagName('p')[2].innerHTML="player 2 wins";
   }
else
   {
    document.getElementsByTagName('p')[2].innerHTML="its a draw";
    }
}
