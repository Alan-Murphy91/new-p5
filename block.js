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
        else if(mario.y >= this.y && mario.y <= this.y+39 && mario.x+45 == this.x) {
            leftDetect++;
        } 
        else if(mario.y >= this.y && mario.y <= this.y+40 && mario.x+40 == this.x) {
            leftDetect++;
        }
        else if(mario.y <= this.y && mario.y+39 >= this.y && mario.x+45 == this.x) {
            leftDetect++;
        }
         else if(mario.isFalling && mario.y+40 >= this.y && mario.y+40 <= this.y+40 && mario.x+40 == this.x) {
            leftDetect++;
        } 
        else if(mario.y >= this.y && mario.y <= this.y+40 && mario.x == this.x+40) {
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

    this.adjust = () => {
        if (mario.x+45 > this.x && mario.x+75 < this.x+40 && mario.y >= this.y && mario.y <= this.y+40) {
            if(!this.type == 'ground' && !mario.isJumping) {
                //console.log('ccccc')
                mario.x -=5;
                mapOffset -= 5;
                currentPos -= 5;
            }
        } 

        else if(mario.x+45 > this.x && mario.x+75 < this.x+40 && mario.y <= this.y && mario.y+39 >= this.y) {
            if(!this.type == 'ground' && mario.isJumping) {
                //console.log('ssss');
                mario.x -=5;
                mapOffset -= 5;
                currentPos -= 5;
            }
        }
    }


    this.goLeft = () => {
        if(slide < 10) {
            this.x -= 1;
        } else if(slide >= 10) {
            this.x -= Math.floor(slide/10);
        }
    }
}
