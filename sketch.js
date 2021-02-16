const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,500,50,50);
    box2 = new Box(700,500,50,50);
    box3 = new Box(600,400,50,50);
    box4 = new Box(700,400,50,50);
    box5 = new Box(650,300,50,50);

    pig1 = new Pig(650,500)
    pig2 = new Pig(650,400)

    log1 = new Log(650,480,200,PI/2)
    log2 = new Log(650,380,200,PI/2)
    log3 = new Log(640,300,90,PI/7)
    log4 = new Log(660,300,85,PI/-7)

    bird1 = new bird(1000,500)

    ground = new Ground(600,height,1200,40)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    pig1.display();
    pig2.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    bird1.display();

    ground.display();
}