
  var snowFlakes = [];
  var number_of_flakes = 10000;
function setup() {
    createCanvas(800,800);
    frameRate(20);
for (var i = 0; i < number_of_flakes; i++){

    snowFlakes[i] = {
        x: random(0, width),
        y: 0,
        xrange: random(1,6),
        yrange: random(1,6),
        scale: random(0,windowHeight),
        display: function(){
          this.y++;

          push();
          var alpha = map(this.y,windowHeight/2,width,255);
          alpha = constrain(alpha,0,255);
          fill(255,255,255,alpha);
          ellipse(this.x,this.y * this.scale,this.xrange,this.yrange);
          //ellipse(this.x, this.y * this.scale, random(this.xrange, this.xrange), random(this.yrange, this.yrange) );
          //ellipse(this.x,this.y*this.scale,random(1,5),random(1,5));
          pop();
        },

        boundCheck: function(){
          if (this.y >= windowHeight) {this.y = snowFlake.scale;}
          if (this.y <= windowHeight) {this.x = random(0, width);}
          if (this.x >= width) {this.x = width -2;}
          if (this.x <= 0) {this.x = 0 + 2;}
        },
    };
 }
}

function draw() {
    background(0);
  for(var i = 0; i < snowFlakes.length; i++) {
    snowFlakes[i].display();
    snowFlakes[i].boundCheck();
  }
}
