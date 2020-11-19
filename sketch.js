
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
dustbin1=new Dustbin(900,400,20,130)
dustbin2=new Dustbin(1000,460,180,20)
dustbin3=new Dustbin(1100,400,20,130)
ball1=new Ball(200,450)
var options={
  isStatic:true
}
ground=Bodies.rectangle(600,480,1200,20,options)
World.add(world,ground)
	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.fetch()
  dustbin2.fetch()
  dustbin3.fetch()
  ball1.fetch()
  rect(ground.position.x,ground.position.y,1200,20)
  keypressed()
  
  drawSprites();
 
}
function keypressed(){
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:20,y:-5})
  }
}



