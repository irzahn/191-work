function setup() {
createCanvas(600,500);

}

function draw() {
  background(200);
  var leftWall = 100;
  var rightWall = 400;
  var xm = mouseX;
  var xc = constrain(mouseX,leftWall,rightWall);
  Stroke(150);
  line(100,leftWall,width,leftWall);
  line(400,rightWall,width,rightWall);
  Stroke();
  fill(150);
  ellipse(xm,33,9,9);
  ellipse(xc,66,9,9);
}
