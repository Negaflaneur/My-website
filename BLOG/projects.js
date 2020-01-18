var message = 'Here are some of my projcts';
var pp = document.getElementById('pp');
pp.innerHTML = message;

/*var circles = [];
function setup(){
	let canvas = createCanvas(800, 800);
	canvas.parent('cV');

}


function draw(){
	background(0);
}*/

let circles = []
function setup() {
  createCanvas(400, 400);
  
  for (let i = 0; i < 300; i++){
  
    let ball = {
    x : random(width),
      y : random(height),
      r: random(1, 20)
    };
    let protection = 0;
    var overlapping = false;
     for (let j = 0; j < circles.length; j++){
       var other = circles[j];
     var d= dist(ball.x, ball.y, other.x, other.y);
       
       if(d < ball.r + other.r){
          overlapping = true;
         break;
          }
  }
    if(!overlapping){
    circles.push(ball);
      protection++
      if (protection > 50000){
          break;
          }
  }
}
}


function draw() {
  background(2);
  
     for (let i = 0; i < circles.length; i++){
       fill(100, 100, 0);
  ellipse(circles[i].x, circles[i].y, circles[i].r*2, circles[i].r*2);
   }
}