var ball,img,paddle;

function preload() {
  paddleImage = loadImage("paddle.png");
  ballImage = loadImage("ball.png");
}

function setup() {
  createCanvas(400, 400);

  paddle = createSprite(380,200,10,60);
  paddle.addImage("paddle",paddleImage);
  
  ball = createSprite(200,200,20,20)
  ball.addImage("ball",ballImage);
  ball.velocityX = 7;
  
  randomVelocity();
}

function draw() {
  background(205,153,0);
  
  edges = createEdgeSprites();
  
  paddle.collide(edges);
  
  ball.bounceOff(paddle);
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  
  if(keyDown(UP_ARROW))
  {
    paddle.y = paddle.y -20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y = paddle.y +20;
  }
  
  drawSprites();
  
}

function randomVelocity()
{
  ball.velocityY = random(-6,6)
  ball.velocityX = random(-6,6)
}

