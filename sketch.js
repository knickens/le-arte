var myMusic;
var r,g,b;
var size;
var x = 200;
var y = 100;
var speedx = 7;
var speedx = 7;

function preload(){
	myMusic = loadSound('js/blacklivesmatter.mp3');
}

function setup(){
    cnv = createCanvas(600,400);
    amplitude = new p5.Amplitude();
    myMusic.setVolume(1.0);
    myMusic.play();

    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
  
}



function draw(){
    background(255);
	var level = amplitude.getLevel();
	size = map(level,0,1,0,200);
    
	  
	stroke(random(2,4));
	fill(r,g,b);
	
 ellipse(size,size,size*3);
 
 
 
	rectMode(CENTER);
	fill(r,g,b);
    rect(100,400,30,size*random(10,15));
    rect(150,400,30,size*random(15,20));
    rect(200,400,30,size*random(25,35));
    rect(250,400,30,size*random(20,30));
    rect(300,400,30,size*random(30,35));
     rect(350,400,30,size*random(40,50));
      rect(400,400,30,size*random(15,20));
       rect(450,400,30,size*random(10,15));
      
      
    
       
      
    
}

		

function mouseClicked(){
if(myMusic.isPlaying()){
  myMusic.pause();  
}  
else{
    myMusic.play();
    fill(r,g,b);
}
}

