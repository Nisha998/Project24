var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, dustbin, paper;
function setup() {
	createCanvas(800, 400);


	
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  
    dustbin = new DustBin(720,390,100,10);
	paper = new Paper(100, 300, 10);

	var options ={
		isStatic:true
	}
    ground = Bodies.rectangle(width / 2, 400, width, 10,options);
	
	World.add(world, ground);
}


function draw() {
  background("black");
  rectMode(CENTER);
  background(0);
  //drawSprites();
  
  dustbin.display();
  paper.display();
  KeyPressed();
}


function KeyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x: 85,y: -85});
	}
}





