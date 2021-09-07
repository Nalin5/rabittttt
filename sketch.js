var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaf,leafImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  spawnApple();
  spawnLeaf();
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX;
  drawSprites();

}
function spawnApple(){
  if (frameCount % 60 === 0) {
    apple = createSprite(600,100,40,10);
    apple.x = Math.round(random(100,160));
    apple.addImage(appleImg);
    apple.velocityY = 3;
    apple.scale = 0.1;
    apple.lifetime = 300;
  }
}
function spawnLeaf(){
 if(frameCount % 60 === 0){
 leaf = createSprite(400,200,40,10);
 leaf.x = Math.round(random(300,360));
 leaf.addImage(leafImg);
 leaf.scale = 0.1;
 leaf.velocityY = 3;
 leaf.lifetime = 300;
 }

}