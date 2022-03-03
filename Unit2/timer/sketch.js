let myState = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  timer++;
  if (timer > 3*60){
    timer = 0;
    myState++;
    if (myState > 4){
      myState = 0;
    }
  }
  switch (myState) {

    case 0:
      background("red");
      for (let j = 0; j < 100; j++) {
        for (let i = 0; i < 100; i++) {
          rect(i * 12, j * 12, 10, 10);
        }
      }
      break;

    case 1:
      background("blue");
      for (let j = 0; j < 100; j++) {
        for (let i = 0; i < 100; i++) {
          rect(i * 12, j * 12, 10, 10);
        }
      }
      break;

    case 2:
      background("black");
      for (let j = 0; j < 100; j++) {
        for (let i = 0; i < 100; i++) {
          rect(i * 12, j * 12, 10, 10);
        }
      }
      break;

    case 3:
      background("yellow");
      for (let j = 0; j < 100; j++) {
        for (let i = 0; i < 100; i++) {
          rect(i * 12, j * 12, 10, 10);
        }
      }
      break;

    case 4:
      background("pink");
      for (let j = 0; j < 100; j++) {
        for (let i = 0; i < 100; i++) {
          rect(i * 12, j * 12, 10, 10);
        }
      }
      break;
  }
}

function mouseReleased() {
  myState++;
  if (myState > 4) {
    myState = 0;
  }
}
