
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world,paper;
var dustbinIMG

function preload() {
  dustbinIMG = loadImage("dustbin.jpg")
}



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(200,450,70);
 

  ground = new Ground(400, 680, 800, 20);
  
  leftSide = new Dustbin(550, 620, 20, 100);
  bottom = new Dustbin(610, 660, 100, 20);
  rightSide = new Dustbin(670, 620, 20, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
//Changed
  background(255);
  
  //Engine.update(engine);

  paper.display();

  ground.display();

  leftSide.display();
  bottom.display();
  rightSide.display();
  
  imageMode(CENTER)
  image(dustbinIMG,610,600,150,150)

  drawSprites();
 
  
}

function keyPressed(){
  if(keyCode === UP_ARROW) {

    //Changes Made
    Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-200});
  }
}