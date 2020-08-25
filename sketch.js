
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	box1 = Bodies.rectangle(400, 650, 200, 20 , {isStatic:true} );
	box2 = Bodies.rectangle(300, 600, 200, 20 , {isStatic:true} );
    box3 = Bodies.rectangle(500, 600, 200, 20 , {isStatic:true} );
	ball = new paperball(50,10,50)
 	World.add(world, ground);
	 World.add(world, box1);
	 World.add(world, box2);
	 World.add(world, box3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(ground.position.x,ground.position.y,800,10)
  rect(box1.position.x,box1.position.y,200,20)
  rect(box2.position.x,box2.position.y,20,120)
  rect(box3.position.x,box3.position.y,20,120)
  ball.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}



