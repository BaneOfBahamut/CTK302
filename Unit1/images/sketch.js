let cat;
let dog;

function setup() {
  createCanvas(500, 500);
}

cat = loadImage("assets/Cat.jpg");
dog = loadImage("assets/Dog.jpg");
function draw() {
  image(cat, width/2, 100);
  image(dog, width /2, 100);
}
