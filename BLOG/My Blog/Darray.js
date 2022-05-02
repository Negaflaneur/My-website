let sketch = function(p){
p.cols = 10;
p.rows = 10;
p.colors = [];
p.setup = function(){
  p.createCanvas(400, 400);
  for(p.i = 0; p.i< p.cols; p.i++){
    p.colors[p.i] = [];
  for( p.j = 0; p.j< p.cols; p.j++){
    p.colors[p.i][p.j] = p.random(255);
  }
  }
}
p.windowResized = function(){
  p.resizeCanvas(p.windowWidth/3, p.windowHeight/3);
  
}

 p.draw = function() {
  p.background(220);
  
   for(p.i = 0; p.i< p.cols; p.i++){
  for( p.j = 0; p.j< p.cols; p.j++){
    p.x = p.i *40;
    p.y= p.j * 40;
    p.fill(p.colors[p.i][p.j] ,0,p.colors[p.i][p.j] );
    p.rect(p.x,p. y, 40, 40);
  }
  }
}
};
new p5(sketch, 'left')