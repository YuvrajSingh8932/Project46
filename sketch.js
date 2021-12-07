var man1,man2,dog,obstacle1,obstacle2,gameOver,reset,track,coin,life,bgImg,car1,car2;
var man1_Img,man2_Img,dog_Img,life_Img,track_Img,gameOver_Img,reset_Img,coin_Img,background,obstacle1_Img,obstacle2_Img;
var car1_Img,car2_Img, runnerImg;

function preload() {
  man1_Img=loadAnimation("Runner4.png","Runner2.png","Runner5.png");
  runnerImg = loadAnimation("Runner2.png");
  /*man2_Img=loadAnimation("Man5.png","Man6.png","Man7.png","Man8.png");*/
  obstacle1_Img=loadImage("Obstacle1.png");
  obstacle2_Img=loadImage("Obstacle2.png");
  coin_Img=loadImage("PowerCoin.png");
  /*gameOver_Img=loadImage("GameOver.png");*/
  life_Img=loadImage("Life.png");
  dog_Img=loadAnimation("pug1.png","pug2.png","pug3.png");
  bgImg=loadImage("Background.png");
  track_Img=loadImage("road.jpg");
  reset_Img=loadImage("Reset Button.png");
  car1_Img=loadImage("Car1.png");
  car2_Img=loadImage("Car2.png");
}
function setup() {
  createCanvas(2000,600);

  track = createSprite(360, 500, 15, 10);
track.addImage(track_Img);
track.scale=1.5;





  background = createSprite(550, 220, 1, 1);
  background.scale = 1;
  background.addImage(bgImg);

  
  man1 = createSprite(250, 395, 1, 1);
  man1.scale = 0.8;
man1.addAnimation("collided",man1_Img);

dog= createSprite(60, 405, 50, 50);
dog.scale = 1;
dog.addAnimation("collided", dog_Img);




  /*  man2=addAnimation("collided",man2_Img);
   obstacle1=addImage(obstacle1_Img);
  obstacle2=addImage(obstacle2_Img);
  coin=addImage(coin_Img);
  gameOver=addImage(gameOver_Img);
  life=addImage(life_Img);

  

  reset=addImage(reset_Img);
  car1=addImage(car1_Img);
  car2=addImage(car2_Img);*/
}

function draw() {
  /*background(0);*/
  track.velocityX = -2;
  if(track.x < 250){
    track.x = track.width/2;
  }
  drawSprites();
}