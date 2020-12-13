const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbin=loadImage("dustbin.png")
}

function setup() {
	createCanvas(800, 700);
	dustbin1=createSprite(width/2+200,550,10,10)
	dustbin1.addImage(dustbin)
	dustbin1.scale=0.7
    groundSprite = createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = "white"
	base1= createSprite(width/2+200,620+29,200,20);
	base1.visible=false
	base1.shapeColor = "yellow"
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width / 2,height-26, width, 10, {isStatic:true});
	World.add(world, ground);
	base2= new dust(width/2+100+20,620-10-50-13,20,226)
	base3= new dust(width/2+300-20,620-10-50-13,20,226)
	base4= new dust(width/2+200,649+13 ,200,25)
	//base5= new dust(200,650,200,20)
	p1= new paper(200,670)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  base1.display()
   //base5.display()
  p1.display()
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(p1.body,p1.body.position,{x:73,y:-200});
	   

   }
   }