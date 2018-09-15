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
        if(mario.x+45 == this.x && mario.y >= this.y && mario.y <= this.y+40) {
            console.log('a');
            leftDetect++;
        }
        else if(mario.x+45 == this.x && mario.y >= this.y && mario.y <= this.y+40) {
            console.log('b');
            leftDetect++;
        }
        else if (mario.x+45 > this.x && mario.x+75 < this.x+40) {
            if(this.type != 'ground' && mario.y >= this.y && mario.y <= this.y+40) {
                console.log('c');
                mario.x -= (mario.x+45 - this.x) + 5;
                mapOffset -= (mario.x+45 - this.x) + 5;
                currentPos -= (mario.x+45 - this.x) + 5;
            }
            else if(this.type != 'ground' && mario.y <= this.y && mario.y+40 > this.y) {
                console.log('d');
                leftDetect++;
                mario.x -=5;
                mapOffset -=5;
                currentPos -=5;
            } 
        } 
        else if(mario.x+45 == this.x){
            if(this.type != 'ground' && mario.y >= this.y && mario.y <= this.y+40) {
                leftDetect++;
            }
            else if(this.type != 'ground' && mario.y <= this.y && mario.y+40 > this.y) {
                leftDetect++;
            }
        }
    }


    this.goLeft = () => {
        if(mario.isJumping) {
            this.x-=5;
        } else {
            if(slide < 10) {
                this.x -= 1;
            } else if(slide >= 10) {
                this.x -= Math.floor(slide/10);
            }
        }
    }
}
