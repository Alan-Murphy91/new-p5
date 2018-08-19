preload = () => {
    const marioright = loadImage('img/marioright.png');
    const marioright1 = loadImage('img/marioright1.png');
    const marioright2 = loadImage('img/marioright2.png');
    const marioleft = loadImage('img/marioleft.png');
    const marioleft1 = loadImage('img/marioleft1.png');
    const marioleft2 = loadImage('img/marioleft2.png');
}

function Mario(x,y,h,w) {
    this.x = x
    this.y = y
    this.h = h;
    this.w = w;
    this.canJump = false;
    this.show = () => {
        stroke(0);
        //ellipse(this.x,this.y,this.h,this.w);

        image(img,this.x,this.y,this.h,this.w);
    }
    this.goLeft = () => {
        this.x -= 5;
    }
    this.goRight = () => {
        this.x += 5;
    }
    this.jump = () => {
        if(this.canJump) {
            this.y -= 5; 
        }
    }
}
