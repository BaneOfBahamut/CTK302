let x = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);
  push();
  translate(x, 0);
  avatar();
  pop();
  x+=10;
  if (x>width){
    x=-300;
  }
  //rotate starts at 0, 0
}

function avatar(){
  rect(150, 175, 200, 300);

}
