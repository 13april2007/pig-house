const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,70,70);
    pig1 = new Pig(800,300);
    box2 = new Box(890,300,70,70);
    log1 = new Log(800,270,270,PI/2);

    box3 = new Box(720,250,70,70);
    pig2 = new Pig(800,250);
    box4 = new Box(880,230,70,70);
    log2 = new Log(790,200,250,PI/2);

    box5 = new Box(800,180,70,60);
    log3 = new Log(740,140,130,PI/7);
    log4 = new Log(800,140,130,-PI/7);

    bird = new Bird(100,150);
    ground = new Ground(500,height,1000,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    fill ("lightgreen");
    box1.display();
    fill ("yellow");
    box2.display();
    fill ("brown");
    ground.display();
    fill (" green");
    pig1.display();
    fill ("orange");
    log1.display();
    fill ("lightgreen");
    box3.display();
    fill (" green");
    pig2.display();
    fill ("yellow");
    box4.display();
    fill ("orange");
    log2.display();
    fill ("red");
     box5.display();
     fill ("orange");
    log4.display();
    fill ("orange");
    log3.display();
    fill ("lightblue");
    bird.display();

}