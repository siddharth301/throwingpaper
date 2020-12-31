
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

var paper,dustbin,ground;

function preload()
{
		
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world;
    world = engine.world;

    //Create the Bodies Here.

    paper = new Paper(100,600);
    ground = new Ground(400,500,800,50);
    dustbin = new Dustbin(600,600);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  if(keyDown("space")){
    paper.velocityX = 4;
    paper.velocityY = 4;
  }
 
  paper.display();
  ground.display();
  dustbin.display();
  drawSprites();
 
}



