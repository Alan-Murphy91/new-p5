function Enemy(x,y,h,w,type='') {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.type = type;

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
        if(mario.y == this.y && (mario.x+40 == this.x || this.x+40 == mario.x)) {
            eSideDetect++;
        }
    }
    this.randomMove = () => {
        if(steps == 50) {
            //console.log('1')
            if(Math.random(1) > 0.5) {
                stepLeft = true;
            } else {
                stepRight = true;
            }
        } 
        if(steps == 0 || steps == 100) {
            stepLeft = false;
            stepRight = false; 
            steps = 50;
            //console.log('reset');
        }
        if(stepLeft) {
            this.x -= 1;
            steps -= 1;
        }
        if(stepRight) {
            this.x += 1;
            steps += 1;
        }
    }
}