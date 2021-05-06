class SlingShot{
    constructor(bodyA, pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB, 
			stiffness:0.04, 
			length:0.5
        }
        this.bodyA=bodyA;//MAHI
		this.pointB=pointB;//MAHI
		this.slingShot=Constraint.create(options);
		World.add(world,this.slingShot);
    }
    attach(body){
		this.slingShot.bodyA=body;
	}

	fly()
	{
		this.slingShot.bodyA=null;
	}

    display()
	{
		if(this.slingShot.bodyA)
		{
			var pointA=this.slingShot.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);
            stroke("darkBlue")		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}      
}