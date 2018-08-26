setup = () => {
    createCanvas(960,600);
    //initialise map
    console.log(blocks);
}

draw = () => {
    //console.log(fallDistance);
    //console.log(jumpDistance);
    //console.log('falling? ',mario.isFalling);
    //console.log('jumping? ',mario.isJumping);
    clear()
    background(200);
    for(let x=0; x<blocks.length; x++) {
        blocks[x].show();
        blocks[x].detectMario()
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
        if(mario.isJumping) {
            blocks[x].marioContact = false;
        }
    }

    mario.show();
    mario.showCentre();

    // ------  jumping  ------- //
    if(mario.isJumping) {
        if(jumpDistance <= 0) {
            mario.isJumping = false;
            mario.isFalling = true;
        }
        jumpDistance -=5;
        mario.y -=5;
    }
    // ------  falling  ------- //
    if(mario.isFalling) {
        mario.y +=5;
    }
}

keyPressed = () => {
    if(keyCode == 32) {
        if(!mario.isFalling && !mario.isJumping){
            mario.isJumping = true;
            jumpDistance = 200;
        }
    }
}
