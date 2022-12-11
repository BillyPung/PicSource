let allRays = [];
let angle = 0;
timeCount = 0;

function setup() {
  createCanvas(1920,1080);
}

function draw() {
  background(220);
  for (var i = 0; i < allRays.length; i++) {
    allRays[i].move();
    allRays[i].check();
    allRays[i].show();
  }
 push(); //remember what it was like before translate, rotate
  translate(width / 2, height / 2);
  rotate(angle);
  if(timeCount >= 5){
    allRays.push(new Ray(width/2, height / 2, angle));
    timeCount = 0;
  }
  else{ timeCount += 1;}
  angle += random(0.1,0.5)
  pop(); //restore what translate and rotate messed up
  //push and pop not really neccessary if last thing draw
}

class Ray {
  constructor(x, y, startAngle) {
    this.originX = x;
    this.originY = y;
    this.distance = 0;
    this.angle = startAngle;
    this.stillOnScreen = true;
    this.speed = 1;
  }
  move() {
    this.distance = this.distance + this.speed;
    this.speed = this.speed + this.distance / 400;
    
  }
  check() {
    this.stillOnScreen = (this.distance < width / 2);
  }
  destroy() {
    delete(this);
  }
  show() {
    push();// remember the fill and stroke before
    fill(255, 255, 255);//, 255 - this.distance );
    stroke(255, 255, 255);//, 255 - this.distance * 2);
    strokeWeight(2);
    // if (this.stillOnScreen) {
    //   for (var i = 0; i < 6; i++) {
    //     var x = this.origin + (this.distance + i * 8) * cos(this.angle);
    //     var y = this.origin + (this.distance + i * 8) * sin(this.angle);
    //     ellipse(x, y, i *2, i*2);
    //   }
      if (this.stillOnScreen) {
      for (var i = 0; i < 3; i++) {
        var x = this.originX + (this.distance + i *2) * cos(this.angle);
        var y = this.originY + (this.distance + i *2) * sin(this.angle);
        var xTo = this.originX + (this.distance + i * 10 ) * cos(this.angle);
        var yTo = this.originY + (this.distance + i * 10 ) * sin(this.angle);
        line(x,y,xTo,yTo);
      }
      //line(this.origin, this.origin, this.origin + (this.distance +  20) *cos(this.angle),this.origin + (this.distance +  20) *sin(this.angle))
    }
    else{this.destroy();}
    pop();  //restore fill and stroke
  }
}
