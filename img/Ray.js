class Ray {
  constructor(x, y, startAngle) {
    this.origin = x;
    this.origin = y;
    this.distance = 0;
    this.angle = startAngle;
    this.stillOnScreen = true;
    this.speed = 1;
  }
  move() {
    this.distance = this.distance + this.speed;
    this.speed = this.speed + this.distance / 150;
  }
  check() {
    this.stillOnScreen = (this.distance < p5.displayWidth / 2);
  }
  show() {
    p5.push();// remember the fill and stroke before
    p5.fill(255, 255, 255);//, 255 - this.distance );
    p5.stroke(230, 230, 230);// 255 - this.distance);
    p5.strokeWeight(7);
    // if (this.stillOnScreen) {
    //   for (var i = 0; i < 6; i++) {
    //     var x = this.origin + (this.distance + i * 8) * cos(this.angle);
    //     var y = this.origin + (this.distance + i * 8) * sin(this.angle);
    //     ellipse(x, y, i *2, i*2);
    //   }
      if (this.stillOnScreen) {
      for (i = 0; i < 3; i++) {
        var x = this.origin + (this.distance + i *2) * p5.cos(this.angle);
        var y = this.origin + (this.distance + i *2) * p5.sin(this.angle);
        var xTo = this.origin + (this.distance + i * 10 ) * p5.cos(this.angle);
        var yTo = this.origin + (this.distance + i * 10 ) * p5.sin(this.angle);
        p5.line(x,y,xTo,yTo);
      }
      //line(this.origin, this.origin, this.origin + (this.distance +  20) *cos(this.angle),this.origin + (this.distance +  20) *sin(this.angle))
    }
    p5.pop();  //restore fill and stroke
  }
}
