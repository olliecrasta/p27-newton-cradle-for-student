
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Ball(300,500,25);
	ball2 = new Ball(350,500,25);
	ball3 = new Ball(400,500,25);
	ball4 = new Ball(450,500,25);
	ball5 = new Ball(500,500,25);
	roof = new Roof(400,200,400,20)
//	rope1 = new Rope(roof.body,ball1.body,?)

//	rope2 = new Rope(roof.body,ball2.body,?)
	rope3 = new Rope(roof.body,ball3.body,0)
//	rope4 = new Rope(roof.body,ball4.body,?)
//	rope5 = new Rope(roof.body,ball5.body,?)
	//run engine
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  roof.display();

//   rope1.display();
//   rope2.display();
  rope3.display();
//   rope4.display();
//   rope5.display();


  drawSprites();
 
}

function keyPressed(){
	//apply force for left ball
	if(keyCode === LEFT_ARROW){
		
		//Body.applyForce(body,position,{x:-70,y:-45})
	}
	//apply force for right ball
	if(keyCode === RIGHT_ARROW){
		
	//	Body.applyForce(body,position,{x:70,y:45})
	}

}


