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
