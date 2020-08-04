const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ball,slingshot,ground,ground1,ground2;

var block1,block2,block3,block4,block5,block6,block7,
block8,block9,block10,block11,block12,block13,block14,block15,block16,
block17,block18,block19,block20,block21,block22,block23;

var engine,world;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world = engine.world; 
  block1 = new Block(330,235,30,40);
  block2 = new Block(400,265,30,40);
  /*
  block3 = new Block();
  block4 = new Block();
  block5 = new Block();
  block6 = new Block();
  block7 = new Block();
  block8 = new Block();
  block9 = new Block();
  */
}

function draw() {
  background(255);  
 Engine.update(engine);
  block1.display();
  block2.display();
  /*
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  /*
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  */
 
 
 
 
 // drawSprites();
}