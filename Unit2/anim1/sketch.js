let x = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background (100);
  rect(x, 100, 100, 100);
  x+=10;
  if (x>width){
    x=0;
  }
}
