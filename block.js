function Block(i,j,x,y,s,type='') {
    this.i = i;
    this.j = j;
    this.x = i*s
    this.y = j*s;
    this.s = s;
    this.ground = false;
    this.type = (type == 'ground' ? 'ground' : 'block');

    this.show = function() {
        if(this.i == 20) {
            this.solid = true;
        }
        stroke(0);
        fill(this.i == 20 ? 0 : 150);
        rect(this.x,this.y,this.s,this.s);
    }

    this.goLeft = function() {
        this.x -= 5;
    }

    this.blocks [

    ]
}
