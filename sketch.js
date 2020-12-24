const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var particles=[];
var plinko=[];
var division=[];

var ground1

var divisionHeight=300;



function setup() {
  createCanvas(400,700);

  engine = Engine.create();

  world = engine.world;

  ground1=new Ground(200, 697.5, 400, 5)

  for(var k=0; k<=width; k=k+80){
    division.push(new Division(k,height-divisionHeight/2,10, divisionHeight))
  }

  for(var k=0; k<=width; k=k+30){
    plinko.push(new Plinko(k,30))
  }

  for(var k=0; k<=width; k=k+30){
    plinko.push(new Plinko(k,70))
  }

  for(var k=0; k<=width; k=k+30){
    plinko.push(new Plinko(k,110))
  }

  for(var k=0; k<=width; k=k+30){
    plinko.push(new Plinko(k,150))
  }

  for(var k=0; k<=width; k=k+30){
    plinko.push(new Plinko(k,190))
  }
  
  for(var k=0; k<=width; k=k+30){
    plinko.push(new Plinko(k,230))
  }

  for(var k=0; k<=width; k=k+30){
    plinko.push(new Plinko(k,270))
  }

  for(var k=0; k<=width; k=k+30){
    plinko.push(new Plinko(k,310))
  }
  
 if (frameCount%60===0){
    particles.push(new Particle(200,10))
  }

  console.log(division)

  console.log(particles)
}

function draw() {
  background("black");
  
  rectMode(CENTER);
    
  console.log("hi")

  Engine.update(engine);
  
  ground1.display();
  
  
 
  
  for (var k = 0; k < division.length; k = k+1) 
  {
    division[k].display();
  }


  

  for(var k=0; k < plinko.length; k++){
    plinko[k].display();
  }


  for(var k=0; k < particles.length; k++){
    particles[k].display();
  }

  drawSprites();
}