class paperball{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Matter.Bodies.circle(x, y, radius, options)
        this.radius=radius
        World.add(world, this.body);
    }
    display(){
        var position=this.body.position
        ellipseMode(CENTER);
        fill("brown");
        ellipse(position.x,position.y, this.radius,this.radius)
        }
}