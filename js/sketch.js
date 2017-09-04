var canvas;
var blob;

var blobs = [];

function setup() {
  canvas = createCanvas(window.innerWidth * .5, window.innerHeight);
  blob = new Blob(width/2, height/2, 45);
  for (var i = 0; i <10; i ++) {
    blobs[i] = new Blob(random(width), random(height), 15);
  }
}

function draw() {
  background(51);
  blob.show();
  for (var i = 0; i < blobs.length; i++) {
    blobs[i].show();
  }
}
