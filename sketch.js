function preload(){
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImg= loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  SeaName.addImage(seaImg);
  if (sea.x < 0) {
    sea.x = sea.width/2;
}

function draw() {
  createSprite();
  background("blue");
 
 }
}