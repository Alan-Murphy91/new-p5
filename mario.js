function Mario(x,y,h,w) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.isJumping = false;
    this.isFalling = false;
    this.canJump = true;
    this.isAnimating = false;
    this.isSmall = true;
    this.isBig = false;
    this.isAnim = false;
    this.canShow = true;
    this.invuln = false;
    
    this.show = () => {
        if(this.canShow && this.isSmall) {
            fill(50);
            stroke(0);
            //rect(this.x,this.y-40,this.w,this.h);
            rect(this.x,this.y,this.w,this.h);
        }
        if(this.canShow && this.isAnim) {
            fill(50);
            stroke(0);
            rect(this.x,this.y-20,this.w,this.h/2);
            rect(this.x,this.y,this.w,this.h);
        }
        if(this.canShow && this.isBig) {
            fill(50);
            stroke(0);
            rect(this.x,this.y-40,this.w,this.h);
            rect(this.x,this.y,this.w,this.h);
        }
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
    this.mushroomAnimate = () => {
        this.invuln = true;
        setTimeout(() => {
            this.canShow = false;
            this.isBig = false;
            this.isSmall = false;
            this.isAnim = true;
        },100);
        setTimeout(() => {
            this.canShow = true;
        },300);
        setTimeout(() => {
            this.canShow = false;
            this.isBig = true;
            this.isSmall = false;
            this.isAnim = false;
        },500);
        setTimeout(() => {
            this.canShow = true;
        },700);
        setTimeout(() => {
            this.invuln = false;
        },2000)
    }

    this.hitAnimate = () => {
        this.invuln = true;
        setTimeout(() => {
            this.canShow = false;
            this.isBig = false;
            this.isSmall = false;
            this.isAnim = true;
        },100);
        setTimeout(() => {
            this.canShow = true;
        },300);
        setTimeout(() => {
            this.canShow = false;
            this.isBig = false;
            this.isSmall = true;
            this.isAnim = false;
        },500);
        setTimeout(() => {
            this.canShow = true;
            this.invuln = false;
        },700);
    }
}
