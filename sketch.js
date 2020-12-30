const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var object1;
var object2;
var ball;

function setup() {
  var canvas = createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var object1_options ={
    isStatic:true
  }

  object1 = Bodies.rectangle(200,390,200,20,object1_options);
  World.add(world,object1);



  var object2_options = {
  restitution:2.0
  }
 object2 = Bodies.rectangle(100,100,50,50,object2_options);
 World.add(world,object2);

 var ball_options = {
  restitution:1.0
  }
 ball = Bodies.circle(200,100,20,ball_options);
 World.add(world,ball);

  //console.log(object1);

  
}
function draw() {
  background("black");  
  Engine.update(engine);
  rectMode(CENTER)
  rect(object1.position.x,object1.position.y,400,20);
  rect(object2.position.x,object2.position.y,50,50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}