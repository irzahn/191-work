# this assigment is challenging, but fun.
##  I struggled with on this assingnment were:
1. arcs- getting the arc to be where I wanted was a pain.
2. grid coordinates, and matching them to what, and where I wanted them, was tricky.
## The tools that helped me were:
* a color code chart.
* asking for help in class with arcs.

[This is a link to my homework](https://irzahn.github.io/191-work/hw-3)
```
'this is my code'
createCanvas(1000,1000);
background(192,192,192);

translate(500,500);
//body
function draw() {
fill(25,25,112);
rect(550,700,400,600,100,100,0,0);


//the head
translate(250,100);
fill(255,255,255);
ellipse(500,500,300,300);

//eyes
push();
translate(0, -30);
fill(0);
ellipse(410,500,30,20);
ellipse(540,500,30,20);
noFill();
arc(415,500,30,30,TWO_PI,HALF_PI);
arc(535,500,30,30,HALF_PI,PI);
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
noFill();
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

```
 ![image of my editor](images/HW_3screenshot.png)
