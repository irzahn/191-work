function Ball(initX, initY, initSize, delta) {
    this.x = initX;
    this.y = initY;
    this.size = initSize;
    this.delta = delta;
}
Ball.prototype.move = function() {
    this.x = this.x +this.delta;
    this.checkEdge();
};
Ball.prototype.checkEdge = function() {
    if (this.x >= width) {
        this.x = width - 1;
        this.delta *= -1;
    } else if (this.x <= 0) {
        this.x = 0 + 1;
        this.delta *= -1;
    }
};

Ball.prototype.display = function() {
    push();
    fill(random(floor(100,255)));
    ellipse(this.x,this.y, this.size++, this.size);
    pop();
};
