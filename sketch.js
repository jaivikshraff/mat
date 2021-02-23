
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hamm,ground,rock,rubbers;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground = new Ground(600,height,1200,20)
  hamm = new hammer(100,100,100,100);
  rock = new stone(100,100,10,100)
  rubbers = new rubber(100,10,100,10)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 hamm.display();
 ground.display();
  drawSprites();
}



