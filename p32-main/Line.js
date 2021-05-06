class Line{
    constructor(x, y, width, height, c){
        var options={
            isStatic: true

        }
        this.line = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.color = c;
        World.add(world, this.line);
    }
    display(){
       var pos =this.line.position;
       rectMode(CENTER);
       stroke("black");
       strokeWeight(1);
       fill(this.color);
       rect(pos.x, pos.y, this.width, this.height);
       
    }
}