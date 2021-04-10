var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1500,400);
  
  
  bullet=createSprite(50,200,50,50);
  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor=(80,80,80); 
  speed=random(223,321);
  weight=random(30,52);
   bullet.velocityX= speed;
  thickness=random(22,83); 
}

function draw() {
  background(255,255,255); 
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var demage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
    
    if(demage>10 )
    {
      wall.shapeColor=color(250,0,0);
    }
    if(demage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x +bullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  {
    return false;
  }
}