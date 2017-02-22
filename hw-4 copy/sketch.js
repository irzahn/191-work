var ellipseLocation = 300;




function setup() {
createCanvas(500,500);
background(225,0,0);
translate(250,250);


}

function draw() {

  fill(0,0,255);
  //ellipse(mouseX,mouseY,20,20);
ellipse(ellipseLocation,250,180,180);

ellipseLocation = ellipseLocation + 1;

//ellipseLocation = ellipseLocation / 2;

}

function mousePressed(){

//ellipseLocation = ellipseLocation - 3;
//background(255,255,255);

}
