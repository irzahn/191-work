var dots ={
  x:500,
  y:300
};
var col ={
  r:255,
  g:255,
  b:255
  };
//var leftWall=25;
//var rightWall=75;
//var mx=mouseX;
//var mc=constrain(mouseX,25,75);


function setup() {
createCanvas(1000,1000);
background(0);
}

function draw() {
//line(leftwall,0,leftwall,height);
//line(rightwall,0,rightwall,height);
noStroke();
fill(col.r,random(0,255),col.b,random(0,255));
ellipse(dots.x,dots.y,1,1);
ellipse(dots.x,dots.y,1,1);
//ellipse(mx,33,10,10);
//ellipse(mc,33,10,10);
dots.x=random(0,width);
dots.y=random(0,height);

}
