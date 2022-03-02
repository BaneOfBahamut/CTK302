let s;

function preload() {
  s = loadSound("assets/Rick.mp3");
}

function setup() {
  createCanvas(500, 500);
  s.play();

}

function mouseReleased(){
  if (s.isPlaying()) {
    s.pause();
  }
  else {
    s.play()
  }
}

function draw() {
  background(100);
}
