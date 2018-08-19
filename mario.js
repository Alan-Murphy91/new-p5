function Mario(x,y,h,w,g) {
    this.x = x
    this.y = y
    this.h = h;
    this.w = w;
    this.gravity = g;
    this.show = () => {
        stroke(0);
        ellipse(this.x,this.y,this.h,this.w);
    }

    this.goLeft = () => {
        this.x -= 5;
    }
    this.goRight = () => {
        this.x += 5;
    }
}