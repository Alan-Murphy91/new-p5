function Block(x,y,h,w,type='',coin=false,mushroom=false) {
    this.x = x
    this.y = y
    this.h = h;
    this.w = w;
    this.type = type;
    this.marioContact = false;
    this.booped = false;
    this.coin = coin;
    this.coinHit = false;
    this.mushroom = mushroom;
    this.mushroomHit = false;
    this.starY = this.y+20;
    this.starYMax = this.starY - 80;
    this.mushroomX = 0;
    this.mushroomY = 0; 
    this.mushroomYMax = this.mushroomY - 40;
    this.mushroomActive = false;
    this.mushroomGround = false;
    this.mushroomXMove = 2;
    this.bumpEnemy = false;
    this.solid = false;

    this.show = () => {
        if(!this.marioContact && !this.booped) {
            switch(this.type) {
                case 'block':
                    //fill(150);
                    break;
                // case 'ground':
                //     fill(120);
                //     break;
                case 'pipe':
                    fill(0,255,0);
                default:
            }
        } 
        else if(this.booped) {
            //fill(255,0,0);
        } 
        else {
            //fill(50,200,100);
        }
        stroke(0);
        //rect(this.x,this.y,this.h,this.w);
    }

    // this.showCentre = () => {
    //     if(this.type == 'block'){
    //         fill(255,0,0);
    //         rect(this.x+20,this.y+20,5,5);
    //     }
    // }

    // this.showLanding = () => {
    //     fill(0,255,0);
    //     rect(this.x+20,this.y,2,2);
    // }

    this.showCoin = () => {
        // if(this.coin && this.coinHit) {
        //     fill(255,215,0);
        //     ellipse(this.x+20,this.starY,20,30);
        // }
    }

    this.raiseCoin = () => {
        if(this.starY > this.starYMax) {
            this.starY-=10;
            score += 50;
        } else {
            this.coin = false;
        }
    }

    this.showMushroom = () => {
        if(this.mushroom) {
            fill(155,215,0);
            //rect(this.x + this.mushroomX,this.y + this.mushroomY,40,40);
        }
    }

    this.raiseMushroom = () => {
        if(!this.mushroomActive && this.mushroomY > this.mushroomYMax) {
            this.mushroomY-=2;
            score +=50;
        } else {
            this.mushroomActive = true;
        }
    }
    
    this.detectMario = () => {
        if(((mario.x+39 >= this.x && mario.x+39 <= this.x+40 && mario.y+40 <= this.y) || (mario.x >= this.x && mario.x <= this.x+39 && mario.y+40 <= this.y)) && dist(mario.x,this.y,mario.x,mario.y+40) == 0) {
            this.marioContact = true;
                topDetect++;
                jumpHeight = 0;
        } 
        //else if(((mario.x+40 >= this.x && mario.x+40 <= this.x+40 && mario.y-40 >= this.y) || (mario.x >= this.x && mario.x <= this.x+39 && mario.y-40 >= this.y)) && dist(mario.x,this.y,mario.x,mario.y-40) == 0) {
        else if(mario.isSmall && this.y < mario.y && mario.x+20 >= this.x-20 && mario.x+20 <= this.x+60 && mario.y-40 <= this.y) {
            if(!mario.isFalling) {
                sbump.play();
                this.bumpEnemy = true;
                this.y -= 5;
                setTimeout(() => {
                    this.y +=5;
                    this.bumpEnemy = false;
                },150)
                this.booped = true;
                if(this.mushroom) {
                    smushroomAppear.play();
                    this.mushroomHit = true;
                    this.solid = true;
                }
                if(this.coin) {
                    scoin.play();
                    coins++;
                    this.coinHit = true;
                    this.solid = true;
                }
            }
            bottomDetect++;
            mario.canJump = false;
        }
        else if(mario.isBig && this.y < mario.y && mario.x+20 >= this.x-20 && mario.x+20 <= this.x+60 && mario.y-80 <= this.y) {
            if(!mario.isFalling) {
                sbump.play();
                this.bumpEnemy = true;
                this.y -= 5;
                setTimeout(() => {
                this.y +=5;
                this.bumpEnemy = false;
                },150)
                this.booped = true;
                if(this.mushroom || this.coin) {
                    if(this.mushroom) {
                        smushroomAppear.play();
                        this.mushroomHit = true;
                        this.solid = true;
                    }
                    if(this.coin) {
                        scoin.play();
                        coins++;
                        this.coinHit = true;
                        this.solid = true;
                    } 
                }   else {
                    if(!this.solid) {
                        sbricksmash.play();
                        this.y = 999;
                    }
                }
            }
            bottomDetect++;
            mario.canJump = false;
        }
        else {
            this.marioContact = false;
        }
    }
    //this is expensive..
    this.detectEnemy = () => {
        for(let x=0; x<enemies.length; x++) {
            if(enemies[x].x+40 == this.x && enemies[x].y == this.y) {
                enemies[x].stepRight = false;
                enemies[x].stepLeft = true;
            }  
            if(enemies[x].x == this.x+40 && enemies[x].y == this.y) {
                enemies[x].stepRight = true;
                enemies[x].stepLeft = false;             
            }
            // if(enemies[x].y < 12*blockSize && this.y == 4*blockSize && this.x < enemies[x].x+40) {
            //     eTopDetect = 1;
            // }
        }
    }

    this.adjust = () => {
        if(mario.isBig && this.type != 'ground' && mario.y+40 > this.y && dist(mario.x+20,mario.y+20,this.x+20,this.y+20) < 45) {
            leftDetect++;
        }
        if(mario.isAnim && this.type != 'ground' && mario.y+40 > this.y && dist(mario.x+20,mario.y+20,this.x+20,this.y+20) <= 40) {
            leftDetect++;
        }
        if (mario.x+45 > this.x && mario.x+75 < this.x+40) {
            if(this.type != 'ground' && mario.y >= this.y && mario.y <= this.y+40) {
                mario.x -= (mario.x+45 - this.x);
                mapOffset -= (mario.x+45 - this.x);
                currentPos -= (mario.x+45 - this.x);
            }
            // if(mario.isBig && this.type != 'ground' && mario.y-40 >= this.y && mario.y-40 <= this.y+40) {
            //     mario.x -= (mario.x+45 - this.x) + 5;
            //     mapOffset -= (mario.x+45 - this.x) + 5;
            //     currentPos -= (mario.x+45 - this.x) + 5;
            // }
            if(mario.isSmall && this.type != 'ground' && mario.y <= this.y && mario.y+40 > this.y) {
                leftDetect++;
                // mario.x -=5;
                // mapOffset -=5;
                // currentPos -=5;
            }  
        } 
        if (mario.x+45 > this.x && mario.x+65 < this.x+40) {
            if(this.type != 'ground' && mario.y >= this.y && mario.y <= this.y+40) {
                mario.x -= (mario.x+45 - this.x);
                mapOffset -= (mario.x+45 - this.x);
                currentPos -= (mario.x+45 - this.x);
            }
            // if(mario.isBig && this.type != 'ground' && mario.y-40 >= this.y && mario.y-40 <= this.y+40) {
            //     mario.x -= (mario.x+45 - this.x) + 5;
            //     mapOffset -= (mario.x+45 - this.x) + 5;
            //     currentPos -= (mario.x+45 - this.x) + 5;
            // }
            if(mario.isSmall && this.type != 'ground' && mario.y <= this.y && mario.y+40 > this.y) {
                leftDetect++;
                // mario.x -=5;
                // mapOffset -=5;
                // currentPos -=5;
            }  
        } 
        if(mario.x+45 == this.x){
            if(this.type != 'ground' && mario.y >= this.y && mario.y <= this.y+40) {
                leftDetect++;
            }
            if(this.type != 'ground' && mario.y <= this.y && mario.y+40 > this.y) {
                leftDetect++;
            }
        }
        /////
        if (mario.x-5 < this.x+40 && mario.x-5 > this.x && slide < 0) {
            if(mario.isSmall && this.type != 'ground' && mario.y >= this.y && mario.y <= this.y+40) {
                // mario.x += ((this.x+40) - (mario.x-5));
                // mapOffset += ((this.x+40) - (mario.x-5));
                // currentPos += ((this.x+40) - (mario.x-5));
                // mario.x += 5;
                // mapOffset += 5;
                // currentPos += 5;


                mario.x += ((this.x+40) - (mario.x-5));
                mapOffset += ((this.x+40) - (mario.x-5));
                currentPos += ((this.x+40) - (mario.x-5));
            }
            if(mario.isBig && this.type != 'ground' && mario.y-40 >= this.y && mario.y-40 <= this.y+40) {
                // mario.x += ((this.x+40) - (mario.x-5));
                // mapOffset += ((this.x+40) - (mario.x-5));
                // currentPos += ((this.x+40) - (mario.x-5));
                // mario.x += 5;
                // mapOffset += 5;
                // currentPos += 5;

                mario.x += ((this.x+40) - (mario.x-5));
                mapOffset += ((this.x+40) - (mario.x-5));
                currentPos += ((this.x+40) - (mario.x-5));
            }
            if(this.type != 'ground' && mario.y <= this.y && mario.y+40 > this.y) {
                rightDetect++;
                // mario.x += 5;
                // mapOffset += 5;
                // currentPos += 5;

                mario.x += ((this.x+40) - (mario.x-5));
                mapOffset += ((this.x+40) - (mario.x-5));
                currentPos += ((this.x+40) - (mario.x-5));
            } 
        } 
        if(mario.x-5 == this.x+40){
            if(this.type != 'ground' && mario.y >= this.y && mario.y <= this.y+40) {
                rightDetect++;
            }
            if(this.type != 'ground' && mario.y <= this.y && mario.y+40 > this.y) {
                rightDetect++;
            }
        }
    }

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
}
