function setup() {
  createCanvas(400, 400);
  background(40, 60, 90);
  noFill();
  stroke('green');
}

function draw() {
  square(0, 0, frameCount*5%400);
  if (frameCount*5%400 == 0){

    backround(0);
  }
}
