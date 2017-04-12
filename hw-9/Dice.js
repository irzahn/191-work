function BouncingDice(init_x, init_y, size) {
    //my perameters for my constructor methosd
    this.loc = {
        x: init_x,
        y: init_y
    };
    this.delta = {
        x: 1,
        y: 1
    };
    this.size = size;
    this.edge = this.size * 0.5;
    this.delta = {
        x: map(this.size, 40, 150, 10, 0.5) * map(round(random(1, 2)), 1, 2, -1, 1),
        y: 0,
        gravity: 0.1

    };
}

BouncingDice.prototype.display = function() {
    push();
    fill(255, 0, 0);
    translate(this.loc.x, this.loc.y);
    rect(0, 0, this.size, this.size);
    pop();
    push();
    fill(255);
    translate(this.loc.x, this.loc.y);
    ellipse(20, 20, 20, 20);
    ellipse(53, 53, 20, 20);
    pop();
};

BouncingDice.prototype.move = function() {

    // update.locition
    this.loc.x += this.delta.x;
    this.loc.y += this.delta.y;
    this.delta.y += this.delta.gravity;

    // edge check
    if (this.loc.x >= width -75) {
        this.loc.x = width-75 - this.delta.x;
        this.delta.x *= -1;
    } else if (this.loc.x <= 0) {
        this.loc.x = 1 + this.delta.x;
        this.delta.x *= -1;
    }

    if (this.loc.y >= height) {
        this.loc.y = height / this.delta.y;
        this.delta.x *= 1;
    } else if (this.loc.y <= 0) {
        this.loc.y = 1 + this.delta.y;
        this.delta.y *= -1;
    }
    // Vertical bounce
    if (this.loc.y + this.edge >= height) {
        this.loc.y = height - this.edge;
        this.delta.y *= -1;
    }
};



BouncingDice.prototype.collisionCheck = function(diceArr, myIdx) {
    var maxDist, distance, otherDice;


    for (var i = 0; i < diceArr.length; i++) {

        var collision = false;

        otherDice = diceArr[i];

        if (i !== myIdx) {
            distance = dist(this.loc.x, this.loc.y, otherDice.loc.x, otherDice.loc.y);
            maxDist = this.edge + otherDice.edge;

            if (distance <= maxDist) {
                collision = true;
            }

            if (collision) {
                this.loc.x *= -10;
                this.delta.y *= -1;
            }

        }

    }
};
