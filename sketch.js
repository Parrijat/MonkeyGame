var play = 1;
var end = 0;
var gameState = play;

var score;

var monkey , monkey_running;
var banana ,bananaImage; 
var obstacle, obstacleImage;
var foodGroup, obstacleGroup;

var ground;

function preload(){
  
  
  monkey_running =loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  foodGroup = new Group();
  obstacleGroup = new Group();
 
}



function setup() {
monkey = createSprite(80, 315, 30, 30);
monkey.addAnimation("moving", monkey_running);
monkey.scale = 0.1
    
ground = createSprite(400,350,900,10);
ground.velocityX = -4;
ground.x = ground.width/2;
}


function draw() {
  createCanvas (600,500)
  background("lightgreen");
  score = Math.ceil(frameCount/frameRate())
  text("Survival Time : " + score, 200, 50);
  
  
  if (gameState === play){
if(ground.x > 0){
  ground.x = ground.width/2;
}
    
    if(keyDown("space") && monkey.y >= 310){
      monkey.velocityY = -17
    }
monkey.velocityY = monkey.velocityY + 0.8;
    
    monkey.collide(ground);

    
    food();  
    obstacles();
    
    if(foodGroup.isTouching(monkey)){
      foodGroup.destroyEach();
    }
    
    if(obstacleGroup.isTouching(monkey)){
      gameState = end;
    }
    
  }
  else if(gameState === end){
    text("GAME OVER", 200, 600)
  }
    
  drawSprites();
  
}
function food(){
  if(frameCount%80 === 0){
    banana = createSprite(499, 300, 10, 10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1
    banana.velocityX = -4
    
    banana.lifetime = 120;
    foodGroup.add(banana)
  }

}

function obstacles(){
  if(frameCount%300 === 0){
    obstacle = createSprite(499, 326, 20, 20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1
    obstacle.velocityX = -4
    
   banana.lifetime = 120;
   obstacleGroup.add(obstacle);
  }

}
