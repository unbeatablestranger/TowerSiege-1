const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var engine, world;
var ground,lStop,rStop,upStop,platform;
var rect1,rect2,rect3,rect4,rect5,rect6,rect7,rect8,rect9,rect10,rect11,rect12,rect13,rect14,rect15,rect16;
var rope,stone;

function setup()
{
    createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2,590,width,20);
    lStop = new Ground(10,height/2,20,height);
    rStop = new Ground(1190,height/2,20,height);
    upStop = new Ground(width/2,10,width,20);

    platform = new Ground(900,350,250,5);

    //bottom level
    rect1 = new Block(800,310,30,40);
    rect2 = new Block(830,310,30,40);
    rect3 = new Block(860,310,30,40);
    rect4 = new Block(890,310,30,40);
    rect5 = new Block(920,310,30,40);
    rect6 = new Block(950,310,30,40);
    rect7 = new Block(980,310,30,40);

    //middle level-1
    rect8 = new Block(830,270,30,40);
    rect9 = new Block(860,270,30,40);
    rect10 = new Block(890,270,30,40);
    rect11 = new Block(920,270,30,40);
    rect12 = new Block(950,270,30,40);

    //middle level-2
    rect13 = new Block(860,230,30,40);
    rect14 = new Block(890,230,30,40);
    rect15 = new Block(920,230,30,40);

    //top level
    rect16 = new Block(890,190,30,40);

    stone = new hexagon(100,300,50,50);

    rope = new chain(stone.body, {x: 250, y:250})

    Engine.run(engine);
}

function draw()
{
    Engine.update(engine);
    background(0);

    stone.display();

    fill("white");
    ground.display();
    lStop.display();
    rStop.display();
    upStop.display();

    platform.display();

    rope.display();

    fill("blue");
    rect1.display();
    rect2.display();
    rect3.display();
    rect4.display();
    rect5.display();
    rect6.display();
    rect7.display();

    fill("green");
    rect8.display();
    rect9.display();
    rect10.display();
    rect11.display();
    rect12.display();

    fill("yellow");
    rect13.display();
    rect14.display();
    rect15.display();

    fill("red");
    rect16.display();
    
    if(keyDown("space"))
    {
        rope.attach(stone.body);
        Matter.Body.setPosition(stone.body,{x:100, y:300});
    }

    fill("white");
    textSize(30);
    text("Drag the Hexagonal stone and release it, to launch it towards the blocks.",25,50);
    text("Press space to reset launcher.",25,550);
}

function mouseDragged()
{
    Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased()
{
    rope.fly();
}
