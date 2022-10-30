const game = new Game();
const player = new Player();
const treasure = new Treasure();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");

  player.image = loadImage('../assets/character-down.png');
  player.imageDown = loadImage('../assets/character-down.png');
  player.imageUp = loadImage('../assets/character-up.png');
  player.imageLeft = loadImage('../assets/character-left.png');
  player.imageRight = loadImage('../assets/character-right.png');

  treasure.image = loadImage('../assets/treasure.png');
}

function draw() {
  
  game.drawGrid();
  player.draw();
  treasure.drawTreasure();
  
}

function keyPressed() {
  clear();
  if (keyCode === 38) {
    player.moveUp();
    player.image = player.imageUp;
  } 
  
  if (keyCode === 40) {
    player.moveDown();
    player.image = player.imageDown;
  }
  
  if (keyCode === 37) {
    player.moveLeft();
    player.image = player.imageLeft;
  }
  
  if (keyCode === 39) {
    player.moveRight();
    player.image = player.imageRight;
  }
}

