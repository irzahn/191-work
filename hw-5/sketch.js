var dots ={
  x:500,
  y:300
};
var col ={
  r:255,
  g:255,
  b:255
  };


var mx;
var mc;
var star = {
  size: 1,
  loc: 0
};
function setup() {
createCanvas(500,500);
background(0);

}

function draw() {


noStroke();
fill(col.r,random(0,255),col.b,random(0,255),col.g,random(0,10),255);
ellipse(dots.x,dots.y,1,1);
ellipse(dots.x,dots.y,1,1);
fill(0,0,random(0,255));
ellipse(mx,random(180,250),random(1,3),random(1,3),random(0,255));
ellipse(mc,330,1,1,random(0,255));
dots.x=constrain(random(0,500),0,width);
dots.y=constrain(random(0,440),0,height);



//this is the shooting star
push();
noStroke();
fill(0);
ellipse(star.loc,150,star.size,star.size);
star.loc = star.loc +2;//shootingstar
noStroke();
fill(255);
ellipse(star.loc,150,star.size,star.size);
star.size += 0.05;
pop();
fill(25);
//ellipse(star.loc,150,star.size,star.size,25);
//body
fill(0);
ellipse(250,370,35,35);//head
rect(230,380,40,70,90,90,0,0);//body
//tunnel vortex
translate(width/2,height/2);
var a = atan2(mouseY-height/2, mouseX-width/2);
rotate (a);
fill(25, 0, random (155, 255),15);
rect(80,50,80,10);
fill(15,0,random(0,255),15);
rect(5,50,80,10);


}
