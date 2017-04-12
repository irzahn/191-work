
var dice = [];
var init_numDice = 2;
var bg_color;
var canCreateNewDice = true;

function setup() {
    createCanvas(windowWidth,windowHeight);
frameRate(20)
    // bg_color = color(0, 0, 0, );

    var init_x = 100;
    var init_y = 100;
    var init_size = random(40, 150);

    for (var i = 0; i < init_numDice; i++) {
        dice.push(
            new Dice(init_x, init_y, init_size, randomColor())
        );
        init_x += init_size + random(50, 150);
        if (init_x >= width) {
            init_x = 100;
            init_y += init_size + random(10, 30);
        }
        init_size = random(20, 150);
    }
}

function draw() {
    background(0, 0, 0);

    canCreateNewDice = true;

    for (var i = 0; i < dice.length; i++) {
        dice[i].frame(dice, i);
    }

}

//function randomColor() {
    //return color( floor(random(256)), floor(random(256)), floor(random(256)) );
//}


function createNewDice(){
    for (var i = 0; i < 2; i++) {
        dice.push(
            new Dice(random(width), random(height), random(20, 150), randomColor())
        );
    }
}

function killDice(idx){
    dice.splice(idx, 1);
}
