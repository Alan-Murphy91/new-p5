setup = () => {
    createCanvas(960,600);
}

draw = () => {
    console.log(eSideDetect);
    topDetect = 0;
    bottomDetect = 0;
    leftDetect = 0;
    rightDetect = 0;
    clear()
    background(200);
    for(let x=0; x<blocks.length; x++) {
        blocks[x].show();
        blocks[x].detectMario();
        blocks[x].detectEnemy();
        blocks[x].showCentre();
        blocks[x].showLanding();
        if(enemies[x]) {
            enemies[x].show();
            enemies[x].randomMove();
            enemies[x].detectMario();
        }
        if(mario.isJumping) {
            blocks[x].marioContact = false;
        }
    }

    // ----------a lot of loops :(    ---need to make this more efficient. initial loop needs
    //to finish to see if a block detects hit. use binary search!

    if(keyIsDown(RIGHT_ARROW) && leftDetect == 0) {
        mapOffset += 5;
        for(let x=0; x<blocks.length; x++) {
                blocks[x].goLeft();
                if(keyIsDown(16)) {
                    mapOffset += 5;
                    blocks[x].goLeft();
                }
                if(enemies[x]) {
                    enemies[x].goLeft();
                    if(keyIsDown(16)) {
                        mapOffset += 5;
                        enemies[x].goLeft();
                    }
                }
        }
    }
    if(keyIsDown(LEFT_ARROW) && rightDetect == 0) {
        mapOffset -= 5;
        for(let x=0; x<blocks.length; x++) {
            blocks[x].goRight();
            if(keyIsDown(16)) {
                mapOffset -= 5;
                blocks[x].goRight();
            }
            if(enemies[x]) {
                enemies[x].goRight();
                if(keyIsDown(16)) {
                    enemies[x].goRight();
                }
            }
        }
    }
    if(topDetect > 0) {
        mario.isFalling = false;
    } else if(bottomDetect > 0) {
        mario.isJumping = false;
        mario.isFalling = true;
    } else {
        if(!mario.isJumping) {
            mario.isFalling = true;
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
    // else if(!mario.isJumping) {
    //     mario.isFalling = true;
    // }
}

keyPressed = () => {
    if(keyCode == 32) {
        if(!mario.isFalling && !mario.isJumping){
            mario.isJumping = true;
            jumpDistance = 200;
        }
    }
}

loseLife = () => {

}
