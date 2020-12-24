class Plinko{
    constructor(x,y){
        this.body= Matter.Bodies.circle(x,y,10, {isStatic:true, restitution:0, friction:1, density:1.2});

        this.radius=10
        

        World.add(world, this.body)
    }

    display(){

        push();

        imageMode(CENTER);

        fill("white");

        stroke("white");

        var pos=this.body.position

        ellipse(pos.x, pos.y, 10, 10);

        pop();

       


    }

}