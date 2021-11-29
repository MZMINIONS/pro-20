
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;




function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
  world = engine.world;
  topGround=new Ground()
	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
		
	
	}


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(100, 10, 20, ball_options)
	World.add(world, ball)

}


function draw() {
	rectMode(CENTER);
	background(0);
	

	Engine.run(engine);
	ellipse(ball.position.x, ball.position.y, 20, 20)
	

}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	}
}


