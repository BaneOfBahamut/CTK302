let freak, jungle, vogue;

function setup() {
  createCanvas(500, 500);
  freak= loadFont("assets/freak.ttf");
  jungle= loadFont("assets/jungle.otf");
  vogue= loadFont("assets/Vogue.ttf");
}

function draw() {
  background (100);
  textFont(freak);
  textSize(48);
  text("freak", 50, 100);

  textFont(jungle);
  textSize(48);
  text("jungle", 100, 200);

  textFont(vogue);
  textSize(48);
  text("vogue", 100, 300);
}
