var backgroundImg;
var snowPersonImg;

function preload() {
backgroundImg = loadImage("snow1.jpg");
snowPersonImg = loadImage("snow.png");
}

function setup() {
  createCanvas(800,400);
  
  snowPersonImgO = createSprite(200,200,20,20);
  snowPersonImgO.addImage(snowPersonImg);
  snowPersonImgO.scale = 0.1;

}

function draw() {
  background(backgroundImg);  
  drawSprites();
}

function keyPressed() {
  if(keyPressed === 32) {
    snowPersonImgO.velocityY = -1;
  }
  if(keyPreesed === 'a') {
   snowPersonImg.velocityX = 1;
  }
  if(keyPreesed === 'd') {
    snowPersonImg.velocityY = 1;
   }
}
