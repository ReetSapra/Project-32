const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0;


function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,400,1200,20);
    stand = new Ground (300,200,300,10)
    box1 = new Box(300,190,30,40);
    box2 = new Box (310,190,30,40);
    box3 = new Box(330,190,30,40);
    box4 = new Box (320,190,30,40);
    box5 = new Box (340,190,30,40);

    box6 = new Box (330,170,30,40);
    box7 = new Box (310,170,30,40);
    box8 = new Box (320,170,30,40);
    box9 = new Box (315,170,30,40);

    box10 = new Box (310,150,30,40);
    box11 = new Box (320,150,30,40);
    
    box12 = new Box (310,120,30,40);

    polygon = new Polygon (50,160,30,30);

    slingshot = new SlingShot(polygon.body,{x:50, y:160});

    ground2 = new Ground (50,170,30,10)
    //World.add (world,polygon);
   
}

function draw(){
    background(255);
    Engine.update(engine);
    textSize(25)
    text ("Score " + score, 700,40);
    ground.display();
    stand.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    ground2.display();
   // slingShot.display();
    polygon.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX, y:mouseY})
}

function mouseReleased (){
  slingshot.fly()
}

