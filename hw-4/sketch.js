//object one
var ballSize;
ballSize = 60;
// object two
var ellipseSize;
ellipseSize = 10;

//couldnt find out how to change my frames for animation
var currFrameRate;
currFrameRate = currFrameRate;
text(currFrameRate,100,100);

//tryed to make shape at specific points
var posX =100;
var posY =100;
posX = posX + 1;
posY = posY + 1;

function setup() {
background(0,0,225);
createCanvas(1000,1000);
frameRate(2,2);
fill(255,0,0);



}

function draw() {
fill(0,255,0);
ballSize (500,500,ballSize,ballSize);
push();
background(0,0,225);
translate(500,500);
//ellipse(mouseX,mouseY,30,30);
pop();


ellipse(width/2,hight/2,ellipseSize,ellipseSize);
console.log(currFrameRate);
//if (frameCount %5 = 0){background(255,0)};




}
