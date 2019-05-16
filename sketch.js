 function setup() {
    createCanvas(400, 400);
}

function draw(){
    let value = 0;
    background(155,85,222);
   
    translate(width/2, height/2);
    scale(mouseX / 300, mouseY / 300);

    fill(value);
    triangle(0, -100, -100, 100, 100, 100);
  
}
 