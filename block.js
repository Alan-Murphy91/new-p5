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
        if(((mario.x+40 >= this.x && mario.x+40 <= this.x+40 && mario.y+40 <= this.y) || (mario.x >= this.x && mario.x <= this.x+40 && mario.y+40 <= this.y)) && dist(mario.x,this.y,mario.x,mario.y+40) == 0) {
            this.marioContact = true;
            topDetect++;
        } else if(((mario.x+40 >= this.x && mario.x+40 <= this.x+40 && mario.y-40 >= this.y) || (mario.x >= this.x && mario.x <= this.x+40 && mario.y-40 >= this.y)) && dist(mario.x,this.y,mario.x,mario.y-40) == 0) {
            this.booped = true;
            bottomDetect++;
        } else if(mario.y >= this.y && mario.y <= this.y+40 && mario.x+40 == this.x) {
            leftDetect++;
        } else if(mario.y >= this.y && mario.y <= this.y+40 && mario.x == this.x+40) {
            rightDetect++;
        } else {
            this.marioContact = false;
        }
    }
    this.detectEnemy = () => {
        
    }

    this.goLeft = () => {
        this.x -= 5;
    }
    this.goRight = () => {
        this.x += 5;
    }
}

