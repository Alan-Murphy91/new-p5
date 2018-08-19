function Block(x,y,s,type='') {
    this.x = x
    this.y = y
    this.s = s;
    this.ground = false;
    this.type = (type == 'ground' ? 'ground' : 'block');

    this.show = function() {
        if(this.type == 'ground') {
            fill(0);
        } else {
            fill(150);
        }
        stroke(0);
        rect(this.x,this.y,this.s,this.s);
    }

    this.goLeft = function() {
        this.x -= 5;
    }
}

