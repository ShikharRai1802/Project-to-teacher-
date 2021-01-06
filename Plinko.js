class Plinko {
    constructor(x,y,r) {
      var options = {
          isStatic: true
      }
      this.radius = r;

      this.body = Bodies.circle(x,y,r,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, r);
    }
  };