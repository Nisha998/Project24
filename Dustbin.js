class DustBin {
    constructor(x, y, width, height,options){
        var options = {
            'isStatic' : true   
        }

        this.bodyb = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.bodyb);
        //this.bodyp= Bodies.rectangle((x-(width/2)), (y-(height*2)), height,options)
       //World.add(world, this.bodyp)
        //this.bodyq= Bodies.rectangle((x+(width/2)), (y-(height*2)), height,options)
        //World.add(world, this.bodyq);
        this.x=x;
        this.y=y;
        this.width = width;
        this.height = height;
    
    }
    display(){
        fill("white");
        rect(this.bodyb.position.x, this.bodyb.position.y, this.width,this.height);

    }

}