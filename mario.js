function Mario(x,y,h,w) {
    this.x = x
    this.y = y
    this.h = h;
    this.w = w;
    this.isJumping = false;
    this.isFalling = false;
    
    this.show = () => {
        fill(50);
        stroke(0);
        rect(this.x,this.y,this.h,this.w);
    }

    this.showCentre = () => {
        fill(255,0,0);
        rect(this.x+20,this.y+20,5,5);
    }
    this.animate = () => {
        this.y += 1000;
    }
}