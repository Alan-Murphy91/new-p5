function Enemy(x,y,h,w,type='') {
    this.x = x;
    this.y = y;
    this.originX = x;
    this.originY = y;
    this.h = h;
    this.w = w;
    this.type = type;
    this.steps = 100;
    this.stepLeft = false;
    this.stepRight = false;
    this.fainted = false;
    this.shell = false;
    this.power = false;
    this.bumped = false;
    //this.isFalling = false;

    this.show = (a,b) => {
        if(!this.fainted) {
            if(this.type == 'goomba') {
                fill(255,255,0);
                rect(this.x,this.y,this.h,this.w);
                //image(a, this.x, this.y, a.width/9, a.height/9);
            } 
            else if(this.type == 'koopatroopa') {
                if(!this.shell && !this.power) {
                    fill(0,255,255);
                    rect(this.x,this.y,this.h,this.w); 
                }
                else if(this.shell && !this.power) {
                    fill(0,155,155);
                    rect(this.x,this.y,this.h,this.w); 
                }
                else if(this.power) {
                    fill(0,55,55);
                    rect(this.x,this.y,this.h,this.w); 
                } else {
                    fill(20,20,20);
                    rect(this.x,this.y,this.h,this.w); 
                }
            }
        }
    }
    // this.goLeft = () => {
    //     this.x -= 5;
    // }
    this.goLeft = () => {
        if(rightRegen && !mario.isJumping && !mario.isFalling && leftDetect == 0) {
            this.x -= Math.floor(slide/10);
        } else {
            // if(mario.isJumping) {
            //     this.x-=5;
            // } 
            //if {
                if(slide < 10) {
                    this.x -= 1;
                } else if(slide >= 10) {
                    this.x -= Math.floor(slide/10);
                }
           // }
        }
    }
    // this.goRight = () => {
    //     this.x += 5;
    // }
    this.detectMario = () => {
        //if(mario.y == this.y && (dist(mario.x+40,mario.y,this.x,this.y) < 4 || dist(mario.x,mario.y,this.x+40,this.y) < 4)) {
        if(!this.bumped && !mario.isFalling && dist(mario.x+20,mario.y+20,this.x+20,this.y+20) <= 40) {
            if(!mario.invuln && mario.isSmall && !mario.isAnimating && !this.fainted) {
                mario.isAnimating = true;
                mario.hitEnemy = true;
                slide = 0;
                theme.stop();
                mario.animate();
            }
            if(!mario.invuln && mario.isBig && !mario.isAnimating && !this.fainted) {
                mario.hitAnimate();
            }
        }
    }
    this.topDetect = () => {
        if((!this.bumped && mario.x+40 >= this.x && mario.x+40 <= this.x+40 || mario.x >= this.x && mario.x-40 <= this.x+40) && dist(mario.x,mario.y+40,mario.x,this.y) <= 1 && !mario.isAnimating) {
            if(!mario.isAnimating && !mario.isJumping && this.type == 'goomba') {
                score += 100;
                ssquish.play();
                this.fainted = true;
                this.y = 700;
                mario.isJumping = true;
                mario.y-=10;
                mario.hasBumped = true;
                setTimeout(()=> {
                    mario.hasBumped = false;
                    mario.canJump = true;
                    mario.isFalling = true;
                    mario.isJumping = false;
                },100);
            }
            else {
                if(!this.shell && !this.power && this.type == 'koopatroopa') {
                    ssquish.play();
                    this.shell = true;
                    mario.isJumping = true;
                    mario.y-=20;
                    setTimeout(()=> {
                        mario.canJump = true;
                        mario.isFalling = true;
                        mario.isJumping = false;
                    },250);
                }
                else if(this.shell && !this.power && this.type == 'koopatroopa') {
                    ssquish.play();
                    if(mario.x+20 < this.x+20) {
                        this.steps = 999;
                        //console.log(mario.x+20,this.x+20, 'right');
                        this.stepLeft = false;
                        this.stepRight = true;
                    } else {
                        //console.log(mario.x+20,this.x+20, 'left');
                        this.steps = 999;
                        this.stepRight = false;
                        this.stepLeft = true;
                    }

                    this.shell = false;
                    this.power = true;
                    mario.isJumping = true;
                    mario.y-=20;
                    setTimeout(()=> {
                        mario.canJump = true;
                        mario.isFalling = true;
                        mario.isJumping = false;
                    },250);
                }
                else if(this.power && this.type == 'koopatroopa') {
                    ssquish.play();
                    score += 100;
                    this.power = false;
                    this.fainted = true;
                    this.y=700;
                    mario.isJumping = true;
                    mario.y-=20;
                    setTimeout(()=> {
                        mario.canJump = true;
                        mario.isFalling = true;
                        mario.isJumping = false;
                    },250);
                }
            }
        } 
    }

    this.randomMove = () => {
        if(this.shell) {
            this.steps = 0;
        } else {
            if(this.steps == 50) {
                if(this.y < 12*blockSize) {
                    this.stepLeft = true;
                } else {
                    if(Math.random(1) > 0.5) {
                        this.stepLeft = true;
                    } else {
                        this.stepRight = true;
                    }
                }
            } 
            if(this.steps == 0 || this.steps == 100) {
                this.stepLeft = false;
                this.stepRight = false; 
                this.steps = 50;
            }
            if(this.stepLeft) {
                if(this.power) {
                    this.x -= 8;
                    this.steps = -1;
                } else {
                    this.x -= 1;
                    this.steps -= 1;
                }
            }
            else if(this.stepRight) {
                if(this.power) {
                    this.steps = 999;
                    this.x += 8;
                    this.steps = -1;
                } else {
                    this.x += 1;
                    this.steps += 1;
                }
            }
        }
    }

    this.bump = () => {
        score += 100;
        this.y -= 10;
        this.bumped = true;
    }
}
