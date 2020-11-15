class box{
 constructor(x,y,width,height){
    var option_rectangle={
        restitution:0.8,
        density:1.0,
        friction:0.3,
      }
      this.body=Bodies.rectangle(x,y,width,height,option_rectangle)
 this.width=width;
 this.height=height;
 World.add(world,this.body);


 }
display(){
var pos=this.body.position;
var angle=this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
rect(0,0,this.width,this.height)
pop();
}

}