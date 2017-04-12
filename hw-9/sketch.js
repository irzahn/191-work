var dice = [];
var num_of_dice = 5;


function setup() {
    createCanvas(windowWidth,windowHeight);

    for (var i = 0; i < num_of_dice; i++) {
        dice.push( new BouncingDice(
            random(width),
            random(height),
            random(75, 75)
        )
      );
    }
}

function draw() {
  background(19, 228, 30);


    for (var i = 0; i < dice.length; i++) {
        dice[i].display();
        dice[i].move();
        dice[i].collisionCheck(dice, i);
    }
}
