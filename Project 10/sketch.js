var sea ,seaImg;
var ship1,shipImg1;

function preload(){
seaImg = loadImage('sea.png');
shipImg1 = loadAnimation('ship-1.png');


}

function setup(){
  createCanvas(400,400);
  

  sea = createSprite(200,200);
  sea.addImage(seaImg);
  sea.scale =0.5;

  ship1.addAnimation(shipImg1);

  ship1 = createSprite(20,20,40,40);
}

function draw() {
  background("blue");


  if(sea.x <0){
    sea.x = sea.width/200;
  }
 
  drawSprites();
}