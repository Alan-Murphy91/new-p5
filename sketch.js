setup = () => {
    createCanvas(960,600);
    //initialise map

}

draw = () => {
    clear()
    background(200);
    for(let x=0; x<blocks.length; x++) {
        blocks[x].show();
        //blocks[x].stopMario();
        blocks[x].showCentre();
        blocks[x].showLanding();
        if(keyIsDown(RIGHT_ARROW)) {
            blocks[x].goLeft();
            if(keyIsDown(16)) {
                blocks[x].goLeft();
            }
        }
        if(keyIsDown(LEFT_ARROW)) {
            blocks[x].goRight();
            if(keyIsDown(16)) {
                blocks[x].goRight();
            }
        }
        if(blocks[x].marioContact) {
            mario.isJumping = false;
            jumpDistance = fallDistance;
            mario.isFalling = true;
        }
    }
    mario.show();
    mario.showCentre();
    if(mario.isJumping) {
        if(jumpDistance <= 0) {
            //console.log('mario reached jump height');
            mario.isJumping = false;
            fallDistance = 200;
            mario.isFalling = true;
        }
        jumpDistance -=5;
        mario.y -=5;
    }
    if(mario.isFalling) {
        //console.log('mario is starting to fall');
        if(fallDistance <=0) {
            mario.isFalling = false;
        }
        fallDistance -=5;
        mario.y +=5;
    }
}

keyPressed = () => {
    if(keyCode == 32) {
        if(mario.canJump && !mario.falling){
            mario.isJumping = true;
            jumpDistance = 200;
        }
    }
}
