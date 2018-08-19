function Block(x,y,h,w,type='') {
    this.x = x
    this.y = y
    this.h = h;
    this.w = w;
    this.ground = false;
    this.type = (type == 'ground' ? 'ground' : 'block');

    this.show = () => {
        if(this.type == 'ground') {
            fill(120);
        } else {
            fill(150);
        }
        stroke(0);
        rect(this.x,this.y,this.h,this.w);
    }

    this.goLeft = () => {
        this.x -= 5;
    }
    this.goRight = () => {
        this.x += 5;
    }
}

