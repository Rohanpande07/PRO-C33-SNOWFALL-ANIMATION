var backgroundImg;
var boy, boyImg, boyImg2, boyImg3, boyImg4;
var invisibleGr;
var snow, snowImg;

function preload(){
  backgroundImg = loadImage("snowbackground.png");
  boyImg = loadAnimation("boy1.png");
  boyImg2 = loadAnimation("boy1.png","boy2.png");
  boyImg3 = loadAnimation("boy3.png");
  boyImg4 = loadAnimation("boy3.png","boy4.png");
  snowImg = loadImage("snow.png");
}

function setup() {
  createCanvas(800,400);

  boy = createSprite(350,275,168,282);
  boy.addAnimation("boy1",boyImg);
  boy.addAnimation("boy2",boyImg2);
  boy.addAnimation("boy3",boyImg3);
  boy.addAnimation("boy4",boyImg4);
  boy.scale = 0.5;

  invisibleGr = createSprite(400,385,800,10);
  invisibleGr.visible = false;
}

function draw() {
  background(backgroundImg);

  if(keyWentDown("left")) {
    boy.changeAnimation("boy2",boyImg2);
    boy.velocityX = -3;
  }
  if(keyWentUp("left")) {
    boy.changeAnimation("boy1",boyImg);
    boy.velocityX = 0;
  }

  if(keyWentDown("right")) {
    boy.changeAnimation("boy4",boyImg4);
    boy.velocityX = 3;
  }
  if(keyWentUp("right")) {
    boy.changeAnimation("boy3",boyImg3);
    boy.velocityX = 0;
  }

  if(keyDown("up") && boy.y >= 100) {
    boy.velocityY = -13;
 }

  boy.velocityY = boy.velocityY + 0.8;

  boy.collide(invisibleGr);
  
  drawSprites();
  Snow();
}

function Snow(){
  if(frameCount % 30 === 0){
    snow = createSprite(random(0,800),0,7,7);
    snow.addImage(snowImg);
    snow.velocityY = 2;
    snow.scale = 0.01;
    snow.lifetime = 400
  }
}