function Enemy(x,y,h,w,type='') {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.type = type;
    this.steps = 100;
    this.stepLeft = false;
    this.stepRight = false;

    this.show = () => {
        fill(255,255,0);
        rect(this.x,this.y,this.h,this.w);
    }
    this.goLeft = () => {
        this.x -= 5;
    }
    this.goRight = () => {
        this.x += 5;
    }
    this.detectMario = () => {
        if(mario.y == this.y && (dist(mario.x+40,mario.y,this.x,this.y) < 5 || dist(mario.x,mario.y,this.x+40,this.y) < 5)) {
            if(!mario.isAnimating) {
                mario.isAnimating = true;
                mario.animate();
            }
        }
    }
    this.randomMove = () => {
        if(this.steps == 50) {
            if(Math.random(1) > 0.5) {
                this.stepLeft = true;
            } else {
                this.stepRight = true;
            }
        } 
        if(this.steps == 0 || this.steps == 100) {
            this.stepLeft = false;
            this.stepRight = false; 
            this.steps = 50;
        }
        if(this.stepLeft) {
            this.x -= 1;
            this.steps -= 1;
        }
        if(this.stepRight) {
            this.x += 1;
            this.steps += 1;
        }
    }
}