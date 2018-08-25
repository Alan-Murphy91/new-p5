function Block(x,y,h,w,type='') {
    this.x = x
    this.y = y
    this.h = h;
    this.w = w;
    this.type = (type == 'ground' ? 'ground' : 'block');
    this.marioContact = false;

    this.show = () => {
        fill(this.type == 'ground' ? 120 : 150);
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

    this.stopMario = () => {
        //console.log(dist(this.x+20,this.y+20,mario.x+40,mario.y+20))
    }

    // this.marioLand = () => {
    //     if(dist(this.x,this.y+20))
    // }

    this.goLeft = () => {
        this.x -= 5;
    }
    this.goRight = () => {
        this.x += 5;
    }
}

