class paper
{
    constructor(x,y)
    {
        var options={
            'isStatic':false,
            'density':1.2,
            'restitution':0.5,
            'friction':1
        }
        this.body=Bodies.circle(x,y,30,options)
        World.add(world,this.body)
        this.image=loadImage("paper.png")
        
    }

    display()
    {
        imageMode(CENTER)
        fill("blue")
        image(this.image,this.body.position.x,this.body.position.y,60,60)
    }
}