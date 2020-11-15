const Engine = Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;
var world;
var engine;
var ground;
var object;
var box1,box2;
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var option ={
     isStatic:true
  }
  var option_circle={
    restitution:1.0
  }
  box1= new box(200,300,50,50);
  box2=new box (240,100,50,100);
 
  ground=Bodies.rectangle(400,390,800,50,option);
  
  World.add(world,ground);
 
  console.log(ground)
}

function draw() {
  background("black"); 
  Engine.update(engine)
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,50);
  box1.display();
  box2.display();
  drawSprites();
}