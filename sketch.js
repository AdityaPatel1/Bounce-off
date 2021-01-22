var fixedRect, movingRect
function setup() {
  createCanvas(1000,800);
  fixedRect = createSprite(400, 200, 50, 70);
  movingRect = createSprite(400,400,50,70);
fixedRect.velocityY = 4
movingRect.velocityY = -4


}

function draw() {
  background("black");  
  if(movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
      movingRect.velocityY = movingRect.velocityY*-1
      fixedRect.velocityY = fixedRect.velocityY*-1
    }
  drawSprites();
}