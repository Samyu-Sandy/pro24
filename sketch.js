const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,r1,r2,s1,m1;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    r1 = new Rubber(200,550,50);
    r2 = new Rubber(275,550,50);
    s1 = new Stone(350,550);
    m1 = new Metal(500,550);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    r1.display();
    r2.display();
    s1.display();
    m1.display();
    
 
}