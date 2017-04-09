var myArray = [];


function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(25);
    for (var i = 0; i<100; i++){
      myArray.push(
        new Ball(0, random(height), random(10, 20),random(10,20)));
  }
}
function draw() {
  background(27, 192, 255);
   console.log();
  for(var i = 0; i < myArray.length; i++) {
    myArray[i].display();
    myArray[i].move();
     }
  }
