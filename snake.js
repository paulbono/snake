var gameOngoing=true;
var snake = [1];

function drawSnake(ctx) {
  ctx.fillStyle = "red";
  ctx.fillRect(20, 20, 21, 21);
  for (var index in snake) {
    console.log(index);
  }
  gameOngoing=false;
}

function main() {
var up = document.getElementById("up");
var down = document.getElementById("down");
var left = document.getElementById("left");
var right = document.getElementById("right");
    
var gameCanvas = document.getElementById("game");
var ctx = gameCanvas.getContext("2d");
ctx.fillStyle = "lightblue";
ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);

up.addEventListener("click",()=>direction= -width );
down.addEventListener("click",()=>direction= +width );
left.addEventListener("click",()=>direction= -1 );
right.addEventListener("click",()=>direction= 1 );


while(gameOngoing){
   drawSnake(ctx);
}

}

$( document ).ready(function() {

 main();
});
