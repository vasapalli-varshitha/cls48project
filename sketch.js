

var screenImg;
var bowl,bowlImg;
var greenapple,greenappleImg;
var redapple,redappleImg;
var gameState="serve";
var score=0;


function preload(){
screenImg = loadImage("background.png");
bowlImg = loadImage("bowl.png");
greenappleImg = loadImage("greenapple.png")
redappleImg = loadImage("redapple.png")

}

function setup() {
  createCanvas(700,800);
  
  greenappleGroup=new Group();
  redappleGroup=new Group();

  
  bowl = createSprite(350,750);
  bowl.addImage(bowlImg);
  bowl.scale=0.3;
}

function draw() {

 
   
  background(screenImg);
  
   fill("pink");

  

  if(keyDown("LEFT_ARROW")){
    bowl.x = bowl.x -5;
  }
  
 if(keyDown("RIGHT_ARROW")){
   bowl.x = bowl.x +5;
 }
  
 if(gameState==="serve"){
  textSize(20);
  text("press DOWN ARROW to start",200,400);

   if(keyDown("DOWN_ARROW")){
    gameState="play";
   }
 }

 if(gameState==="play"){
  if(frameCount%250===0){
    greenappleA();
   }

   if(frameCount%300===0){
    redappleA();
   }

   if(greenappleGroup.isTouching(bowl)){
    greenappleGroup.destroyEach();
    score=score+1;
  }

  if(redappleGroup.isTouching(bowl)){
    redappleGroup.destroyEach();
    score=score-1;
  }
 }

 if (score===50){
  text("welldone",200,400);
 }
 if(score===-5){
   gameState="end";
  }
  
  
 
  
  drawSprites();
  textSize(20);

  text("score:"+score,20,20) 

}
function greenappleA(){
  greenapple=createSprite(Math.round(random(20,650)),40,30,30);
  greenapple.addImage(greenappleImg);
  greenapple.scale=0.4;
  greenapple.velocityY=5;
  greenappleGroup.add(greenapple)
 }


 function redappleA(){
  redapple=createSprite(Math.round(random(20,650)),40,30,30);
  redapple.addImage(redappleImg);
  redapple.scale=0.4;
  redapple.velocityY=5;
  redappleGroup.add(redapple)
  
 }
