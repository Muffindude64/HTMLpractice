function setup() {
  createCanvas(400, 400);
  background(50, 70,100);
  noFill();
  stroke('cyan');
}

function draw() {
  ellipse(200, 200, frameCount*5%400);
  if (frameCount*5%400 == 0){

    backround(0);
  }
}
