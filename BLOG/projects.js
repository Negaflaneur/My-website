var message = 'Here are some of my projcts';
var pp = document.getElementById('pp');
pp.innerHTML = message;

let Path = function(s){
s.verticies = []
s.setup = function() {
  s.createCanvas(400, 400);

}
s.windowResized = function(){
  s.resizeCanvas(s.windowWidth/3, s.windowHeight/3);
  
}

s.mousePressed = function(){
s.v = createVector(s.mouseX,s.mouseY);
  s.verticies.push(s.v);
}

s.draw = function() {
  s.background(0);
  
  s.reached = [];
  s.unreached = [];
  
  for(s.i = 0; s.i < s.verticies.length; s.i++){
  s.unreached.push(s.verticies[s.i]);
  }
  s.reached.push(s.unreached[0]);
  s.unreached.splice(0, 1);
  
  while( s.unreached.length > 0){
  s.record = 100000;
    s. rIndex;
    s. uIndex;
    
    for(s.i = 0; s.i < s.reached.length; s.i++){
    
      for(s.j = 0; s.j < s.unreached.length; s.j++){
        s.v1= s.reached[s.i];
        s.v2 = s.unreached[s.j];
        s.d = dist(s.v1.x, s.v1.y, s.v2.x, s.v2.y);
        
        if(s.d< s.record){
        s.record = s.d;
         s. rIndex = s.i;
          s.uIndex = s.j;
        }
      }
    }
    s.stroke(255);
    s.strokeWeight(2);
      s.line(s.reached[s.rIndex].x, s.reached[s.rIndex].y, s.unreached[s.uIndex].x,s. unreached[s.uIndex].y);
    
      s.reached.push(s.unreached[s.uIndex]);
  s.unreached.splice(s.uIndex, 1);
  }
  
  for(s.i = 0;s.i < s.verticies.length; s.i++){
  s.fill(255);
    s.ellipse(s.verticies[s.i].x, s.verticies[s.i].y, 20, 20);
  }
}
};
new p5(Path,'right');



