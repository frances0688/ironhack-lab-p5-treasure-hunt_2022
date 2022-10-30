class Game {
  drawGrid() {
    for (let i=0; i < HEIGHT/10; i++) {
     line(0, i*HEIGHT/10, WIDTH, i*HEIGHT/10);
     line(i*WIDTH/10, 0, i*WIDTH/10, HEIGHT);
    }
  }

}

class Player {
  constructor() {
    this.col = 0
    this.row = 0
    this.image
    this.imageDown
    this.imageUp
    this.imageLeft
    this.imageRight
  }

  moveUp() {
    this.row -= 100;
  }

  moveDown() {
    this.row += 100;
  }

  moveLeft() {
    this.col -= 100;
  }

  moveRight() {
    this.col += 100;
  }

  draw() {
    image(this.image, this.col, this.row, 100, 100);

  }
}

class Treasure {
  constructor () {
    this.col = 0;
    this.row = 0;
    this.image;
    this.setRadomPosition();
  }

  setRadomPosition(){
    this.col = Math.floor(Math.random()*10)*100;
    this.row = Math.floor(Math.random()*10)*100;
  }

  drawTreasure() {
    image(this.image, this.col, this.row, 100, 100);
  }
}


