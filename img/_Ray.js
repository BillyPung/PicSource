class RayL {
  constructor(x, y, startAngle) {
    this.originX = x;
    this.originY = y;
    this.distance = 0;
    this.angle = startAngle;
    this.stillOnScreen = true;
    this.speed = 1;
    this.length = p5.floor(p5.random(4,12));
  }
  move() {
    this.distance = this.distance + this.speed;
    this.speed = this.speed + this.distance / 350;

  }
  check() {
    this.stillOnScreen = (this.distance < width / 2);
  }
  destroy() {
    delete(this);
  }
  show() {
    p5.push();// remember the fill and stroke before
    p5.fill(255, 255, 255);//, 255 - this.distance );
    p5.stroke(255, 255, 255);//, 255 - this.distance * 2);
    p5.strokeWeight(6);
    // if (this.stillOnScreen) {
    //   for (var i = 0; i < 6; i++) {
    //     var x = this.origin + (this.distance + i * 8) * cos(this.angle);
    //     var y = this.origin + (this.distance + i * 8) * sin(this.angle);
    //     ellipse(x, y, i *2, i*2);
    //   }
      if (this.stillOnScreen) {
      for (var i = 0; i < this.length; i++) {
        var x = this.originX + (this.distance + i *2) * p5.cos(this.angle);
        var y = this.originY + (this.distance + i *2) * p5.sin(this.angle);
        var xTo = this.originX + (this.distance + i * 10 ) * p5.cos(this.angle);
        var yTo = this.originY + (this.distance + i * 10 ) * p5.sin(this.angle);
        p5.line(x,y,xTo,yTo);
      }
      //line(this.origin, this.origin, this.origin + (this.distance +  20) *cos(this.angle),this.origin + (this.distance +  20) *sin(this.angle))
    }
    else{this.destroy();}
    p5.pop();  //restore fill and stroke
  }
}
