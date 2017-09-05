function Blob(w, h, r) {
  this.pos = createVector(w, h);
  this.r = r;
  this.randomColor = [random(255), random(255), random(255)];
}

Blob.prototype.update = function () {
  var mouse = createVector(mouseX, mouseY);
  mouse.sub(this.pos);
  mouse.setMag(5);
  this.pos.add(mouse);
};

Blob.prototype.touches = function(other) {
  var d = p5.Vector.dist(this.pos, other.pos);
  if (d < this.r + other.r) {
    this.randomColor = other.randomColor;
    return true;
  } else {
    return false;
  }
};

Blob.prototype.show = function () {
  fill(this.randomColor);
  ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
};
