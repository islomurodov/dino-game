/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 300);

const image = new Image();
image.src = "sprite.png";

class Background {
  constructor(image) {
    this.image = image;
    this.width = 2404;
    this.height = 130;
    this.x = 0;
    this.y = this.height * 2;
    this.spriteWidth = 0;
    this.spriteHeight = 100;
    this.speed = 1;
  }

  update() {
    this.x--;
    if (this.x <= -this.width) {
      this.x = 0;
    }
    this.x = Math.floor(this.x - this.speed);
  }

  draw() {
    ctx.drawImage(
      this.image,
      this.spriteWidth,
      this.spriteHeight,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
    ctx.drawImage(
      this.image,
      this.spriteWidth,
      this.spriteHeight,
      this.width,
      this.height,
      this.x + this.width,
      this.y,
      this.width,
      this.height
    );
  }
}

const background = new Background(image);

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

function update() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  background.update();
}

function draw() {
  background.draw();
}

gameLoop();
