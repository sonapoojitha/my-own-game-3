var background,backgroundImg
var girl,girl_running
var coinsGroup,coinImg
var score;

function preload(){
  backgroundImg=loadImage("background.png")
girl_running=loadAnimation("girl1.png","girl2.png");

coinImg=loadImage("coin.png")
}


function setup() {
  createCanvas(400,400);
  background=createSprite(350,200,20,20)
background.scale=2
background.addImage("scenery",backgroundImg)
background.velocityX=-3
girl=createSprite(50,350,20,20)
girl.addAnimation("girl running",girl_running)
girl.scale=1.5

coinsGroup=new Group();
 
score=0;


}

function draw() {
   
  

  if(background.x < 0){
    background.x=background.width/2
  }
  
  
  girl.y=World.mouseY;
  spawnCoins()
  if(coinsGroup.isTouching(girl)){
    coinsGroup.destroyEach();
    score=score+1
  }

  if(score==10){
    textSize(50)
    fill("blue")
    text("you won",200,200)
  }
  
  
  drawSprites();
  textSize(20);
  fill("red")
  text("Score: "+ score, 250,50);
  
}

function spawnCoins(){
  if(frameCount % 50 === 0){
   var coin = createSprite(400,165,10,40);
    coin.y = Math.round(random(80,320));
      coin.addImage(coinImg);
      coin.velocityX=-(6+ score);
      coin.scale=0.05;
      coin.lifetime=200;
    coinsGroup.add(coin);

}
}