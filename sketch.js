const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(480, 800);

	engine = Engine.create();
	world = engine.world;

	dot = new Plinko(200,200,10);
	
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  dot.display();
 
 drawSprites();
}



