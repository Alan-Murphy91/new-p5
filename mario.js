function Mario(x,y,h,w) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.isJumping = false;
    this.isFalling = false;
    this.canJump = true;
    this.isAnimating = false;
    this.isBig = false;
    
    this.show = () => {
        fill(50);
        stroke(0);
        //rect(this.x,this.y-40,this.w,this.h);
        rect(this.x,this.y,this.w,this.h);
    }

    this.showCentre = () => {
        fill(255,0,0);
        rect(this.x+20,this.y+20,5,5);
    }
    this.animate = () => {
        let animationEffect = 500;
        while(animationEffect >= 5) {
            mario.y -=1;
            animationEffect -=5;
        }
    }
}
