//A program to make a drum machine.

var song1;
var song2;
var song3;
var song4;
var song5;
var song6;
var song7;
var song8;
var song9;
var song10;
var song11;
var song12;

function setup() {
  createCanvas(500, 500);
}

function preload() { 
//Sound setup.
  song1 = loadSound("sample1.mp3");
  song2 = loadSound("sample2.mp3");
  song3 = loadSound("sample3.mp3");
  song4 = loadSound("sample4.mp3");
  song5 = loadSound("sample5.mp3");
  song6 = loadSound("sample6.mp3");
  song7 = loadSound("sample7.mp3");
  song8 = loadSound("sample8.mp3");
  song9 = loadSound("sample9.mp3");
  song10 = loadSound("sample10.mp3");
  song11 = loadSound("sample11.mp3");
  song12 = loadSound("sample12.mp3");
}

function draw() {
  //Gunmetal background
  background("#2A3439")
  
  //Circles in black.
  fill(000)
  ellipse(100, 125, 75, 75);
  ellipse(200, 125, 75, 75);
  ellipse(300, 125, 75, 75);
  ellipse(400, 125, 75, 75);
  ellipse(100, 250, 75, 75);
  ellipse(200, 250, 75, 75);
  ellipse(300, 250, 75, 75);
  ellipse(400, 250, 75, 75);
  ellipse(100, 375, 75, 75);
  ellipse(200, 375, 75, 75);
  ellipse(300, 375, 75, 75);
  ellipse(400, 375, 75, 75);
  
//1. Orange cirlce.  
  if(mouseIsPressed && dist(mouseX, mouseY, 100, 125)<37.5){ 
    fill("orange");
  ellipse(100, 125, 75, 75);
  song1.play();
  song1.playMode('sustain');
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = "black";
     }
  
//2. Red circle.
  if(mouseIsPressed && dist(mouseX, mouseY, 200, 125)<37.5){
      fill("red");
  ellipse(200, 125, 75, 75);
  song2.play();
  song2.playMode('sustain');
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = "black";
     }
  
//3. Purple circle.
  if(mouseIsPressed && dist(mouseX, mouseY, 300, 125)<37.5){
    fill("purple");
  ellipse(300, 125, 75, 75);  
  song3.play();
  song3.playMode('sustain');
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = "black";
     }

//4. Pink circle.
    if(mouseIsPressed && dist(mouseX, mouseY, 400, 125)<37.5){
      fill("pink");
  song4.play();
  song4.playMode('sustain');
  ellipse(400, 125, 75, 75);
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = "black";
    }
   
//5. Blue circle.
  if(mouseIsPressed && dist(mouseX, mouseY, 100, 250)<37.5){
      fill("blue");
  ellipse(100, 250, 75, 75); 
  song5.play();
  song5.playMode('sustain');
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = "black";
    }

//6. Yellow cirlcle.
   if(mouseIsPressed && dist(mouseX, mouseY, 200, 250)<37.5){
     fill("yellow");
  ellipse(200, 250, 75, 75); 
  song6.play();
  song6.playMode('sustain');
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = "black";
    }
   
//7. Cyan circle.
  if(mouseIsPressed && dist(mouseX, mouseY, 300, 250)<37.5){
      fill("cyan");
  ellipse(300, 250, 75, 75);
  song7.play();
  song7.playMode('sustain');
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = "black";
    }
  
//8. Green circle.
  if(mouseIsPressed && dist(mouseX, mouseY, 400, 250)<37.5){
      fill("green");
  ellipse(400, 250, 75, 75);
  song8.play();
  song8.playMode('sustain');
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = "black";
   }
   
//9. Spring green circle. 
  
  if(mouseIsPressed && dist(mouseX, mouseY, 100, 375)<37.5){
      fill("#d0f0c0");
  ellipse(100, 375, 75, 75);
  song9.play();
  song9.playMode('sustain');
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = "black";
   }

//10. Navy circle.  
    if(mouseIsPressed && dist(mouseX, mouseY, 200, 375)<37.5){
      fill("navy");
  ellipse(200, 375, 75, 75);
  song10.play();
  song10.playMode('sustain');
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = "black";
   } 
  
//11. Gold circle.   
  if(mouseIsPressed && dist(mouseX, mouseY, 300, 375)<37.5){
      fill("gold");
  ellipse(300, 375, 75, 75);
  song11.play();
  song11.playMode('sustain');
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = "black";
   }
  
//12. Magenta circle.
  if(mouseIsPressed && dist(mouseX, mouseY, 400, 375)<37.5){
      fill("magenta");
  ellipse(400, 375, 75, 75);
  song12.play();
  song12.playMode('sustain');
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = "black";
   }
 }