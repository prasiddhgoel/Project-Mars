var player, alien1,rocket,bg,astronaut,crops ;
var alien2,alien3,invi,invi2,tributetorem,bgsong,explosion,explosion1,invi,invi2,loading,loadingsc, waterboi;
var playerimg, alienimg,bgimg,asimg,crops1,a2,a3;
var bullet, changePower="none"
var gameState="loading"
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
playerImage=loadImage("player.png")
bgimg=loadImage("bg.png")
alienimg=loadImage("alien.png")
crops=loadImage("cropp.png")
asimg=loadImage("image (26).png")
a2=loadAnimation("image (16).png","image (22).png","image (23).png","image (24).png")
gunimg=loadImage("image (27).png")
a3=loadImage("image (17).png")
bgsong=loadSound("rem.mp3")
explosion=loadImage("image (18).png")
waterboi=loadImage("image (29).png")
loadingsc=loadImage("image (20).png")
}

function setup() {
createCanvas(displayWidth-20,displayHeight-20);
 player=createSprite(50,displayHeight-300,100,100)
 alien1=createSprite(500,300,100,100)
 crops1=createSprite(200,250,50,50)
 astronaut=createSprite(800,220,50,50)
 alien2=createSprite(800,600,100,100)
 bullet=createSprite(800,300,50,50)
 alien2.addAnimation("bluealien",a2);
 alien3=createSprite(1200,280,60,60)
 invi=createSprite(800,450,300,10) 
 loading=createSprite(640,300,700,700)
gun=createSprite(800,300,50,50)
 astronaut.velocityX=0
 astronaut.velocityY=0

 alien3.addImage("normal alien",a3)
	engine = Engine.create();
  player.addImage("normal player",playerImage)
  player.addImage("waterboi",waterboi)
  alien1.addImage(alienimg)
  crops1.addImage(crops)
  astronaut.addImage(asimg)
  alien2.velocityY=2
  alien3.addImage("explosion",explosion)
  loading.addImage(loadingsc)
  
  invi.visible=false
  bullet.visible=false
  gun.visible=false
	world = engine.world;
 
  astronaut.setCollider("rectangle",0,0,30,100)
  alien1.scale=0.1
  alien2.scale=0.1
  alien3.scale=0.3
  crops1.scale=0.3
  astronaut.scale=0.3
  loading.scale=1
  gun.scale=0.5
  player.scale=0.09

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgimg);
 var edges=createEdgeSprites()
  astronaut.bounceOff(edges)
  alien2.bounceOff(edges)
  alien2.bounceOff(invi)
 // alien2.addAnimation("bluealien",a2);
      if (gameState==="play") {
        player.scale=0.09
        if(keyDown(LEFT_ARROW))
        { changePosition(-5,0);
      } else if(keyDown(RIGHT_ARROW)){ 
        changePosition(5,0);
      } else if(keyDown(UP_ARROW)){
          changePosition(0,-5);
      } else if(keyDown(DOWN_ARROW)){
          changePosition(0,+5);     
      }
        if (player.isTouching(alien1)) {
          textSize(25);
          fill("green")
          stroke(1)
          text('Hey there! would you mind harvesting crops please? business is tough out here. Press spacebar on the crops',0, 500);
          alien1.lifetime=60
          changePower="none"
        }
     

        if (player.isTouching(alien3)) {
          textSize(25);
          fill("red");
          stroke(1)
          text('HOW DARE YOU COME IN MY TERRITORY? I AM GONNA BLAST!!',100, 500);
          alien3.changeImage("explosion",explosion)
          changePower="none"
        }

        if (astronaut.isTouching(player)) {
        alien2.visible=false 
        alien3.visible=false
        alien1.visible=false
        crops1.visible=false
        astronaut.velocityX=0
        astronaut.velocityY=0
        textSize(25);
        fill("black");
        stroke(1)
        text('GAME OVER! REFRESH THE PAGE TO START PLAYING AGAIN.TRY NOT TOUCHING THE EVIL ALIENS.',0, 500);
        changePower="none"
        }

        if (player.isTouching(alien2)) {
        changePower="water power"
        textSize(25)
        fill ("blue")
        stroke(1)
        text("Hi! Thanks for visiting me. No one bothers to come here to visit me. Take these powers and kill the alien!", 0, 500)
      

        }
        if (changePower==="water power") {
          player.changeImage("waterboi",waterboi)
          player.scale=0.3
          if (player.isTouching(astronaut)) {
          astronaut.destroy()
          }
        
        }   

      
      
    keyPressed()
    
        }
  drawSprites();

 
}

function changePosition(x,y){
 player.x = player.x + x;
 player.y = player.y + y;
 }

 
 function keyPressed() {
if (keyCode===32&& player.isTouching(crops1)) {                                                                                    
  textSize(28);
  fill(10, 102, 153);
 text('Thanks! complete tasks from the other characters across the river       LEVEL 1',0, 500);
 textSize(25);
 fill("red");
 stroke(1)
 text('LEVEL 2')
}
if(keyCode===13 && gameState==="loading") {
  loading.visible=false
  gameState="play"
  astronaut.velocityX=5
  astronaut.velocityY=5
}

}                                                                                                                                                                                                                                                                        
