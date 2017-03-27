var redo; //redistribute
function setup() {
    createCanvas(800, 800);
    frameRate(15);
    snowFlake = {
        x: random(1, width),
        y: 0,
        //xSize: random(1,5),
        //ySize: random(1,5),
        t: 255

    };

}

function draw() {
    background(0);
    snowFlakes();
    falling();
    fading();
}

function snowFlakes() {

    snowFlake.y++;

    ellipse(snowFlake.x - 2, snowFlake.y * 1.5, random(2, 4), random(2, 4));
    ellipse(snowFlake.x, snowFlake.y, random(1,5),random(1,5));
    ellipse(snowFlake.x + 10, snowFlake.y * 2.4, random(5, 10), random(5, 10), snowFlake.t);
    ellipse(snowFlake.x + 100, snowFlake.y * 2, random(3, 5), random(3, 5));
    ellipse(snowFlake.x - 100, snowFlake.y * 3, random(2, 6), random(2, 6));
    ellipse(snowFlake.x, snowFlake.y * 4, random(1, 8), random(1, 8));
}

function falling() {
    //snowFlake.x += snowFlake.dx;
    //snowFlake.y += snowFlake.d
    if (snowFlake.y >= 800) snowFlake.y = 0;
    if (snowFlake.y <= 0) snowFlake.x = random(1, width);
    if (snowFlake.x >= width) snowFlake.x = width-2;
    if (snowFlake.x <= 0) snowFlake.x = 0 + 2;
}

function fading() {
    if (snowFlake.y <= 400) fill(255, 255, 255);


    snowFlake.t = snowFlake.t - 0.25;

}
