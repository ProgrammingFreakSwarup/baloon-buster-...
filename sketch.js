var score = 0;
var s2=0;
var bow, bowani;
var arr, arrani
var gamestate = "initial"
var r, rb;
var g, gb
var b, bb
var y, yb
var p, pb
var spawngroup;
var bcb, bcc;
var arrstrength=20;
var baloonbur=0;
function preload() {
  //load your images here 
  bcani = loadImage("12.png");
  bck = createSprite(300, 200);
  bck.scale = 1;
  bck.velocityX = 0
  bck.addImage("bckaa", bcani);



  bowani = loadImage("bow ini.png");
  bowanii = loadImage("bow.png");
  bow = createSprite(540, 180);
  bow.addImage("bow", bowani);





  rb = loadImage("r.png");
  gb = loadImage("g.png");
  bb = loadImage("b.png");
  yb = loadImage("y.png");
  pb = loadImage("p.png");

  arrani = loadImage("arrow.png");
  arr = createSprite(500, 200);
  arr.addImage("arrow", arrani)
  arr.visible = false;
  arr.depth=50;
}

function setup() {
  createCanvas(600, 510);
  spawngroup= new Group();
  
  //                                                                                                                                                                                                                                                                                                                                            for(var i=80; i<400;i=i+100){
  //                                                                                                                                                                                                                                                                                                                   b =createSprite(100,i);
  //                                                                                                                                                                                                                                                                                                                   b.addImage("rr",bb);
  //                                                                                                                                                                                                                                                                                                                   b.scale=0.09;
  //                                                                                                                                                                                                                                                                                                                 //add code here
  //                                                                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                                                                         
  //                                                                                                                                                                                                                                                                                                                    y.addImage("rr",yb);
  //                                                                                                                                                                                                                                                                                                                    y.scale=0.5

  //                                                                                                                                                                                                                                                                                                                  }for(var i=230; i<250;i=i+50){
  //                                                                                                                                                                                                                                                                                                                    p =createSprite(250,i);
  //                                                                                                                                                                                                                                                                                                                    p.addImage("rr",pb);
  //                                                                                                                                                                                                                                                                                                                    p.scale=1.1
  //                                                                                                                                                                                                                                                                                                                  }
}


function draw() {
  console.log(baloonbur);
  background("white"); 
   spawnThings()

  text("BALLOONS BURST : "+baloonbur, 100, 480);
  noStroke();
for (var i = 0; i < 500; i=i+20) {
    stroke("black")
    line(300,i,300,i+10);
  }
  noStroke();
  // let angle = Math.atan2(mouseY-180, mouseX-500);   
  if (gamestate === "initial" && keyDown("space")) {
    arr.velocityX = -15;
    gamestate = "play";
    bow.addImage("bow", bowanii);
    arrow();

  }


  bow.y = mouseY;
  // rotate(angle);

  if (bck.x < 200) {
    bck.velocityX = -bck.velocityX;
  }
  if (bck.x > 400) {
    bck.velocityX = -bck.velocityX;
  }

  drawSprites()

  if (gamestate === "initial") {
    arr.y = mouseY;
    fill("black");
    text("Press Space to shoot", 320, 440);
   
    text("LIFETIME: "+score, 480, 440);
  
     text("Also you HAVE TO call back the arrow with R", 320, 480);
  stroke("black");
  text("BALLOONS BURST : "+baloonbur, 100, 480);
  noStroke();
  }

  if (keyDown("R") && gamestate === "play") {
    arr.velocityX = 15;
   
  }
  if (gamestate === "play" && arr.x > 488 && arr.velocityX > 8) {
    gamestate = "initial"
    arrstrength=arrstrength-1;
    initial();
  }
  if(gamestate==="play"){
     text("Arrow Strength: "+arrstrength, 100, 440);
      score=Math.round(frameCount/100+score);

  }
  if(gamestate==="play"&& arr.isTouching(spawngroup)){
    baloonbur=baloonbur+1;
    r.lifetime=0;
  }
  if(gamestate==="initial"&& arrstrength===0){
    gamestate="gameover";
  }
if(gamestate==="gameover"){
  fill("yellow");
   textSize(24);
   text("GAMEOVER",300,255);
  fill("black");
  text("credits :"+"S SWARUP",320,490)
  
}
  // rbaloon();
  // bbaloon();
  // gbaloon();
  // pbaloon();
  // ybaloon();
  

 
}

function arrow() {
  arr.visible = true;
}

function initial() {
  arr.x = 500;
  arr.y = 200;
  arr.velocityX = 0;
  arr.velocityY = 0;
  arr.visible = false;
  bow.addImage("bow", bowani);

}

function spawnThings(){
if (frameCount % 40 === 0) {
  r = createSprite(50, 500);
  r.scale = 0.09;
    r.velocityY = -3-8
    r.x = Math.round(random(30, 370));
        r.depth=48;
  r.lifetime=39;
  
  var rand = Math.round(random(1,4))
  switch(rand){
    case 1: r.addImage("rr", rb);
    break;
    case 2: r.addImage("rr", gb);
    break;
    case 3: r.addImage("rr", bb);
    break;
    case 4: r.addImage("rr", yb);
      r.scale=0.9
    break;
    default:break;
         }
  spawngroup.add(r);
  

}
}
// function rbaloon() {
//   if (frameCount % 400 === 350) {

    
    
    
//   }
// }

// function gbaloon() {
//   if (frameCount % 400 === 40) {
//     g = createSprite(50, 500);
//     g.addImage("rr", gb);
//     g.scale = 0.09;
//     g.velocityY = -3;
//     g.x = Math.round(random(30, 370));
//         g.depth=48;
//   }
// }

// function bbaloon() {
//   if (frameCount % 400 === 120) {
//     b = createSprite(50, 500);
//     b.addImage("rr", bb);
//     b.scale = 0.09;
//     b.velocityY = -3;
//     b.x = Math.round(random(30, 370));
//         b.depth=48;
//   }
// }

// function pbaloon() {
//   if (frameCount % 400 === 190) {
//     p = createSprite(50, 500);
//     p.addImage("rr", pb);
//     p.scale = 1.1;
//     p.velocityY = -3;
//     p.x = Math.round(random(30, 370));
//       p.depth=48;
//   }
// }

// function ybaloon() {
//   if (frameCount % 400 === 260) {
//     y = createSprite(50, 500);
//     y.addImage("rr", yb);
//     y.scale = 0.5
//     y.velocityY = -3;
//     y.x = Math.round(random(30, 370));
//     y.depth=48;
//   }
// }