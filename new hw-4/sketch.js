
var r = 0;
var g = 255;
var b = 100;
var snow = {
  loc: 6,
  trans: 255
};
var snow2 = {
  loc: 1,
  trans: 255
};


function setup() {
createCanvas(1000,1000);


}


function draw() {
  r = map(mouseX,0,1000,0,255);
  //g = map(mouseY,0,1000,0,255);
  b = map(mouseX,0,1000,255,0);
background(r,0,b);
textSize(32);
fill(0,0,0);
text("Isaac Zahn 'IKE'",400,450);
//r = map(mouseX,0,1000,0,255);
//g = map(mouseY,0,1000,0,255);
//b = map(mouseX,0,1000,255,0);
//body
fill(25,25,112);
rect(550,700,400,600,100,100,0,0);

//the head
translate(250,100);
fill(255,178,102);
ellipse(500,500,300,300);
arc(480,505,80,50,QUARTER_PI,PI);

//eyes
push();
translate(0, -30);
//ellipseMode(RADIUS);
fill(255);
ellipse(410,500,30,20);
ellipse(540,500,30,20);
noFill();
arc(415,500,30,30,TWO_PI,HALF_PI);
arc(535,500,30,30,HALF_PI,PI);
pop();
push();
//ellipseMode(CENTER);
fill(0,0,150,180);
ellipse(402,468,10,10);
ellipse(532,468,10,10);
pop();
// beard
push();
fill(139,69,19);
rect(380,530,190,250,90,90,20,20);
pop();


//month
push();
fill(0,0,0);
ellipse(473,590,20,15);
// noFill();
arc(415,585,100,70,TWO_PI,HALF_PI);
arc(530,585,100,70,HALF_PI,PI);
arc(467,595,60,25,QUARTER_PI,PI-HALF_PI);
pop();

//arms
push();
stroke(200);
line(630,700,630,1000);
line(365,700,365,1000);
pop();

//snow

push();
noStroke();
fill(255,255,255,snow2.trans);
ellipse(10,snow.loc,6,6);
snow.loc = snow.loc +1;
snow.trans = snow.trans - 1;
pop();
push();
noStroke();
fill(255,255,255,snow2.trans);
ellipse(100,snow2.loc,10,10);
snow2.loc = snow2.loc +1;
snow2.trans = snow2.trans - 0.18;
pop();
push();
noStroke();
fill(255,255,255,snow2.trans);
ellipse(19,snow2.loc,10,10);
snow2.loc = snow2.loc +1;
snow2.trans = snow2.trans - 0.18;
pop();
noStroke();
fill(255,255,255,snow2.trans);
ellipse(200,snow.loc,1,1);
snow.loc = snow.loc +1;
snow.trans = snow.trans - 0.25;
pop();
push();
noStroke();
fill(255,255,255,snow2.trans);
ellipse(40,snow.loc,6,6);
snow.loc = snow.loc +0.01;
snow.trans = snow.trans - 1;
pop();
push();
noStroke();
fill(255,255,255,snow2.trans);
ellipse(500,snow.loc,2,2);
snow.loc = snow.loc +0.000125;
snow.trans = snow.trans - 0.13;
pop();
push();
noStroke();
fill(255,255,255,snow.trans);
ellipse(400,snow.loc,3,3);
snow.loc = snow.loc +0.0008;
snow.trans = snow.trans - 2;
pop();
push();
noStroke();
fill(255,255,255,snow.trans);
ellipse(200,snow.loc,7,7);
snow.loc = snow.loc +0.0005;
snow.trans = snow.trans - 1;
pop();

noStroke();
fill(255,255,255,snow2.trans);
ellipse(20,snow.loc,30,30);
}
