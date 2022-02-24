function setup() {
  createCanvas(400, 400);
  background(120, 20, 80);
  noFill();
  stroke('orange');
}

function draw() {
  ellipse(200, 150, frameCount*5%400);
  if (frameCount*5%400 == 0){

    backround(0);
  }
}