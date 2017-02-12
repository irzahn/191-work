function setup() {
createCanvas(1000,1000);
background(192,192,192);
}
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
line(464,585,430,625);
line(480,585,525,625);
pop();





}
