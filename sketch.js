var path, pathImg;
var boy,boyImg;
function preload(){
  //pre-load images
  pathImg=loadImage("path.png")
  boyImg=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200,10,10)
  path.addImage(pathImg)
  path.velocityY=-2

  boy=createSprite(200,350,10,10)
  boy.addAnimation("boy",boyImg)
  boy.scale=0.05

  //leftwall=createSprite(30,200,50,400)

  //rightwall=createSprite(370,200,50,400)


}

function draw() {
  background(0);
  boy.x=mouseX
  if(path.y<0){
    path.y=height/2
  }

 if(boy.x<80){
   boy.x=80
 }
 if(boy.x>310){
   boy.x=310
 }


drawSprites()
}
