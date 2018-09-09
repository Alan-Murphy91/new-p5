function Block(x,y,h,w,type='') {
    this.x = x
    this.y = y
    this.h = h;
    this.w = w;
    this.type = type;
    this.marioContact = false;
    this.booped = false;

    this.show = () => {
        if(!this.marioContact && !this.booped) {
            switch(this.type) {
                case 'block':
                    fill(150);
                    break;
                case 'ground':
                    fill(120);
                    break;
                case 'pipe':
                    fill(0,255,0);
                default:
            }
        } 
        else if(this.booped) {
            fill(255,0,0);
        } 
        else {
            fill(50,200,100);
        }
        stroke(0);
        rect(this.x,this.y,this.h,this.w);
    }

    this.showCentre = () => {
        if(this.type == 'block'){
            fill(255,0,0);
            rect(this.x+20,this.y+20,5,5);
        }
    }

    this.showLanding = () => {
        fill(0,255,0);
        rect(this.x+20,this.y,2,2);
    }
    
    this.detectMario = () => {
        if(((mario.x+40 >= this.x && mario.x+40 <= this.x+40 && mario.y+40 <= this.y) || (mario.x >= this.x && mario.x <= this.x+39 && mario.y+40 <= this.y)) && dist(mario.x,this.y,mario.x,mario.y+40) == 0) {
            this.marioContact = true;
                topDetect++;
        } 
        else if(((mario.x+40 >= this.x && mario.x+40 <= this.x+40 && mario.y-40 >= this.y) || (mario.x >= this.x && mario.x <= this.x+39 && mario.y-40 >= this.y)) && dist(mario.x,this.y,mario.x,mario.y-40) == 0) {
            if(!mario.isFalling) {
                this.booped = true;
            }
            bottomDetect++;
        }
         else if(mario.y >= this.y && mario.y <= this.y+40 && mario.x+40 == this.x) {
            leftDetect++;
        } else if(mario.y >= this.y && mario.y <= this.y+40 && mario.x+40 == this.x) {

        }
         else if(mario.isFalling && mario.y+40 >= this.y && mario.y+40 <= this.y+40 && mario.x+40 == this.x) {
            leftDetect++;
        } else if(mario.y >= this.y && mario.y <= this.y+40 && mario.x == this.x+40) {
            rightDetect++;
        } else if(mario.isFalling && mario.y+40 >= this.y && mario.y+40 <= this.y+40 && mario.x == this.x+40) {
            rightDetect++;
        } 
        else if(mario.isJumping && mario.y <= this.y && mario.y+39 >= this.y && mario.x == this.x+40) {
            rightDetect++;
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
            } else if(enemies[x].x == this.x+40 && enemies[x].y == this.y) {
                enemies[x].stepRight = true;
                enemies[x].stepLeft = false;             
            }
        }
    }
    //.... ;)
    //TODO: move all 'bug' functions into a switch statement and merge with detection funcs
    this.fixBug = () => {
        if (mario.x+45 > this.x && mario.x+50 < this.x+40 && mario.y >= this.y && mario.y <= this.y+40) {
            if(!this.type == 'block') {
                mario.x -=5;
                mapOffset -= 5;
                currentPos -= 5;
            }
        }
    }
    this.fixBug2 = () => {
        if (mario.x+45 >= this.x && mario.x+75 <= this.x+40 && mario.y >= this.y && mario.y <= this.y+40) {
            mario.x -=5;
            mapOffset -= 5;
            currentPos -= 5;
        }    
    }
    this.fixBug3 = () => {
        if (mario.y <= this.y && mario.y+39 >= this.y && mario.x+45 >= this.x && mario.x+75 <= this.x+40) {
            mario.x -=5;
            mapOffset -= 5;
            currentPos -= 5;
        }    
    }

    this.goLeft = (param) => {
        //this.x -= 5;
        if(blocksRightOne) {
            //console.log('1');
            if(param != 132) {
                blocksRightOneN += 1;
                this.x -=1;
            } 
            else if(blocksRightOneN >= 3000 && param == 132){
                blocksRightOne = false;
                blocksRightTwo = true;
                blocksRightOneN = 0;
            }
        }
        else if(blocksRightTwo) {
            //console.log('2');
            if(param != 132) {
                blocksRightTwoN += 1;
                this.x -=2;
            } 
            else if(blocksRightTwoN >= 3000 && param == 132){
                blocksRightTwo = false;
                blocksRightThree = true;
                blocksRightTwoN = 0;
            }
        }
        else if(blocksRightThree) {
            //console.log('3');
            if(param != 132) {
                blocksRightThreeN += 1;
                this.x -=3;
            } 
            else if(blocksRightThreeN >= 3000 && param == 132){
                blocksRightThree = false;
                blocksRightFour = true;
                blocksRightThreeN = 0;
            }
        }
        else if(blocksRightFour) {
            //console.log('4');
            if(param != 132) {
                blocksRightFourN += 1;
                this.x -=4;
            } 
            else if(blocksRightFourN >= 3000 && param == 132){
                blocksRightFour = false;
                sprint = true;
            }
        }
        else if(sprint) {
            //console.log('5');
            this.x -=5;
        }
        else if(stopRightOne) {
            //console.log('aa');
            if(param != 132) {
                stopRightOneN += 1;
                this.x -=1;
            } 
            else if(stopRightOneN >= 1500 && param == 132){
                stopRightOneN = 0;
                blocksRightOneN = 0;
                stopRightOne = false;
            }
        }
        else if(stopRightTwo) {
            //console.log('bb');
            if(param != 132) {
                stopRightTwoN += 1;
                this.x -=2;
            } 
            else if(stopRightTwoN >= 1500 && param == 132){
                stopRightOne = true;
                stopRightTwoN = 0;
                blocksRightTwoN = 0;
                stopRightTwo = false;
            }
        }
        else if(stopRightThree) {
            //console.log('cc');
            if(param != 132) {
                stopRightThreeN += 1;
                this.x -=3;
            } 
            else if(stopRightThreeN >= 1500 && param == 132){
                stopRightTwo = true;
                stopRightThreeN = 0;
                blocksRightThreeN = 0;
                stopRightThree = false;
            }
        }
        else if(stopRightFour) {
            //console.log('ee');
            if(param != 132) {
                stopRightFourN += 1;
                this.x -=4;
            } 
            else if(stopRightFourN >= 1500 && param == 132){
                stopRightThree = true;
                stopRightFourN = 0;
                blocksRightFourN = 0;
                stopRightFour = false;
            }
        }
    }
    this.goRight = () => {
        this.x += 5;
    }
}