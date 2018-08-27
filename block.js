function Block(x,y,h,w,type='') {
    this.x = x
    this.y = y
    this.h = h;
    this.w = w;
    this.type = (type == 'ground' ? 'ground' : 'block');
    this.marioContact = false;

    this.show = () => {
        if(!this.marioContact) {
            fill(this.type == 'ground' ? 120 : 150);
        } else {
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
            landed++;
        } else {
            this.marioContact = false;
        }
    }

    this.goLeft = () => {
        this.x -= 5;
    }
    this.goRight = () => {
        this.x += 5;
    }
}

