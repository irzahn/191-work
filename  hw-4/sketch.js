
var r = 0;
var b = 100;
var snow = {
  loc: 60,
  trans: 255
};
var snow2 = {
  loc: 30,
  trans: 255
};
var snow3 = {
  loc: 200,
  trans: 240
};

var snow4 = {
  loc: 500,
  trans:200

};
function setup() {
createCanvas(1000,1000);


}


function draw() {

background(r,0,b);
textSize(32);
fill(0,0,0);
text("Isaac Zahn 'IKE'",400,450);
r = map(mouseX,0,1000,0,255);
b = map(mouseY,0,1000,255,0);

//body
fill(25,25,112);
rect(550,700,400,600,100,100,0,0);

//the head
translate(250,100);
fill(255,178,102);
ellipse(500,500,300,300);
stroke(0);
arc(480,505,80,50,QUARTER_PI,PI);

//eyes
push();
translate(0, -30);

fill(255);
ellipse(410,500,30,20);
ellipse(540,500,30,20);
noFill();
stroke(0);
arc(415,500,30,30,TWO_PI,HALF_PI);
arc(535,500,30,30,HALF_PI,PI);
pop();
push();
fill(r,b,150,180);
ellipse(402,468,10,10);
ellipse(532,468,10,10);
pop();

// beard
push();
fill(r,69,b);
rect(380,530,190,250,90,90,20,20);
pop();


//month
push();
fill(0,0,0);
ellipse(473,590,20,15);
noFill();
stroke(0);
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

snow.loc = snow.loc +1;
snow.trans = snow.trans - 1;
snow2.loc = snow2.loc +2;
snow2.trans = snow2.trans -2;
snow3.loc= snow3.loc+3;
snow3.trans= snow3.trans+3;
snow4.loc = snow4.loc +4;
snow4.trans= snow4.trans-4;

noStroke();
fill(255,255,255,snow.trans);
ellipse(400,snow.loc,30,30);
ellipse(20,snow2.loc,25,25);
ellipse(100,snow3.loc,20,20);
ellipse(300, snow4.loc,10,10);
ellipse(200,snow.loc,20,20);
ellipse(10,snow2.loc,25,25);
ellipse(500,snow3.loc,5,5);
ellipse(700,snow4.loc,50,50);









}
