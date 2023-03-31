 let input,greet,button;
let wateringcanimg; 
let buttona;
let bg;
let a; 
let i;
let functiongreeting;
function setup() {
let cnv = createCanvas(windowWidth,windowHeight);


//watering can 

  wateringcanimg = loadImage ('wateringcan.png')  


input = createInput();
  input.position(20, 65); 

buttona = createButton('submit');
  buttona.position(input.x + input.width, 75);
  buttona.mousePressed(greet); 
greet= createP( 'How is your day?');
  greet.position(20, 5);

//water me button
buttonb = createButton('water me');
  buttonb.position(650, 450);
 
 
a=0;
 
 
 

 
 
}


  
  for (let i = 0; i < 200; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height));
    rotate(random);
    
    pop();
  }


 
//clicking function
 
function draw(){ 
background(232, 235, 247)

//raindrop
a=a+1;
fill(0,255,300);
circle((200), a, 200);
 
//outside 
fill(58, 190, 255)
rect(460,0,750,499)
//sun 
fill(251, 209, 162)
circle(740,450,295) 

//flower pot  
fill(255)
rect(400,500,850,50)

//windowsill 
fill(165, 127, 96)
rect(400, 500, 850, 80) 
 
rect(400,0,60,545) 
rect(1200,0,60,566) 



//flower pot  
fill(48, 52, 63)
rect(615,500,470,87) 
rect(615,450,470,145) 

//stem 
fill(107, 191, 89)
rect(749,300,30,149)

image(wateringcanimg, mouseX, mouseY);

}


 
