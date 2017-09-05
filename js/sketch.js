var canvas;
var blob;

var blobs = [];

function setup() {
  canvas = createCanvas(window.innerWidth * .5, window.innerHeight);
  blob = new Blob(width/2, height/2, 45); //create muncher
  // create small circles
  for (var i = 0; i <10; i ++) {
    blobs[i] = new Blob(random(width), random(height), 15);
  }
}

function draw() {
  background(51);
  for (var i = blobs.length -1; i >= 0; i--) {
    blobs[i].show();
    if (blob.touches(blobs[i])) {
      blobs.splice(i,1);
    }
  }
  blob.show();
  blob.update(); //change position based on mouse pos
}
