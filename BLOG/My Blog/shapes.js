class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.yspeed = 1;
    this.history =[];
    this.v = createVector(this.x, this.y);
  }


  update() {
   this.x += random(-10, 10);
    this.y += random(-10, 10);

    this.v = createVector(this.x, this.y);
    
    this.history.push(this.v);
  if(this.history.length > 100){
     this.history.splice(0, 1)
     }
    
  }

  show() {
    fill(255);
    ellipse(this.x, this.y, 30);
    
    // beginShape();
    // noFill();
    // stroke(255);
  for(let i = 0; i < this.history.length; i++){
  var pos = this.history[i];
    fill(255, 0, 255, 100);
    ellipse(pos.x, pos.y, 8, 8);
    // vertex(pos.x, pos.y);
  }
  //   endShape();
  }
}

let b;
let particles = [];

function setup() {
  let shape = createCanvas(400, 400);
  shape.parent('left');
  //let button = createButton('STOP');
  //button.mousePressed(RESETsketch);

  // b = new Ball(x, y);
}

function RESETsketch(){
  for (let i = 0; i < particles.length; i++){
particles.splice(particles[i], i);
    noLoop();
  }
}

function mousePressed(){
particles.push(new Ball(mouseX, mouseY));
}

function draw() {
  background(2);
for (let i = 0; i < particles.length; i++){
  particles[i].update();
  particles[i].show();
}

}