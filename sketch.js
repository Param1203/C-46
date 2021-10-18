var caveman, cavemanImg;
var log, logImg;
var coin, coinImg;
var bg, bgImg;
var invisibleground;

function preload(){
bgImg = loadImage("assets/jungle.png")

cavemanImg = loadImage("assets/caveman.png")

logImg = loadImage("assets/log.png")

coinImg = loadImage("assets/coin.png")
}

function setup(){
  createCanvas(500,400);
  bg = createSprite(50,50,5,5);
  bg.addImage(bgImg);
  bg.scale = 1.0;
  bg.velocityX = 1;

  caveman = createSprite(390,320,5,5);
  caveman.addImage(cavemanImg);
  caveman.scale = 0.3;

  invisibleground = createSprite(390,300,5,5);
  invisibleground.scale = 1.0
}

function draw() {
  background("blue");
  if(keyDown("space")){
    caveman.velocityY = -8
  }
  caveman.velocityY = caveman.velocityY + 0.5;
  if(bg.x>400){
    bg.x = 300;
  }
  //spawnlog();
  drawSprites();
}

function spawnlog(){
  if(framecount%80===0){
    log = createSprite(-50,350,5,5);
    log.addImage(logImg);
    log.scale = 0.2;
  }
}

function spawncoin(){
  if(framecount%80===0){
    coin = createSprite(350,250,5,5);
    coin.addImage(coinImg);
    coin.scale = 0.2;
  }
}
