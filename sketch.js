
setup = () => {
    createCanvas(960,600);
}

draw = () => {
    console.log(rightDetect);
    topDetect = 0;
    bottomDetect = 0;
    leftDetect = 0;
    rightDetect = 0;
    clear();
    background(200);
    for(let x=0; x<blocks.length; x++) {
        //only draw whats on the screen
         if(blocks[x].x < 960 && blocks[x].x > -40) {
            blocks[x].show();
            blocks[x].detectMario();
            blocks[x].detectEnemy();
            blocks[x].showCentre();
            blocks[x].showLanding();
            blocks[x].fixBug();
            blocks[x].fixBug2();
            blocks[x].fixBug3();
        }
        if(enemies[x]) {
            if(enemies[x].x < 960 && enemies[x].x > -40) {
                enemies[x].show();
                enemies[x].randomMove();
                enemies[x].detectMario();
                enemies[x].topDetect();
            }
        }
        if(mario.isJumping) {
            blocks[x].marioContact = false;
        }
    }

    // ----------a lot of loops :(    ---need to make this more efficient. initial loop needs
    //to finish to see if a block detects hit. use binary search?

    if((keyIsDown(RIGHT_ARROW) && leftDetect == 0 && !mario.isAnimating) || ((stopRightOne || stopRightTwo || stopRightThree || stopRightFour) && !mario.isAnimating && leftDetect == 0)) {
        if(currentPos < 0) {
            mario.x += 5;
            currentPos += 5;
        } else {
        //mapOffset += 5;
        if(blocksRightOne) {
            mapOffset += 1;
        }
        else if(blocksRightTwo) {
            mapOffset += 2;
        }
        else if(blocksRightThree) {
            mapOffset += 3;
        }
        else if(blocksRightFour) {
            mapOffset += 4;
        }
        else if(stopRightOne) {
            mapOffset += 1;
        }
        else if(stopRightTwo) {
            mapOffset += 2;
        }
        else if(stopRightThree) {
            mapOffset += 3;
        }
        else if(stopRightFour) {
            mapOffset += 4;
        }
        }

        for(let x=0; x<blocks.length; x++) {
                if(currentPos == 0) {
                    blocks[x].goLeft(x);
                }
                if(enemies[x]) {
                    if(currentPos == 0) {
                        enemies[x].goLeft();
                    }
                }
        }
    }
    if(keyIsDown(LEFT_ARROW) && rightDetect == 0 && !mario.isAnimating) {
        if(currentPos > -440) {
            if(marioLeftOne) {
                //console.log('1');
                mapOffset -= 1;
                currentPos -= 1;
                marioLeftOneN += 1;
                this.x -=1;
                if(marioLeftOneN >= 1500){
                    marioLeftTwo = true;
                    marioLeftOne = false;
                    marioLeftOneN = 0;
                }
            }
            else if(marioLeftTwo) {
                //console.log('2');
                mapOffset -= 2;
                currentPos -= 2;
                marioLeftTwoN += 2;
                this.x -=2;
                if(marioLeftTwoN >= 1500){
                    marioLeftThree = true;
                    marioLeftTwo = true;
                    marioLeftTwoN = 0;
                }
            }
            else if(blocksRightThree) {
                //console.log('3');
                blocksRightThreeN += 1;
                this.x -=3;
                
                if(blocksRightThreeN >= 1500 && param == 132){
                    blocksRightThree = false;
                    blocksRightFour = true;
                    blocksRightThreeN = 0;
                }
            }
            else if(blocksRightFour) {
                //console.log('4');
                
                blocksRightFourN += 1;
                this.x -=4;
                if(blocksRightFourN >= 1500 && param == 132){
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
                stopRightOneN += 1;
                this.x -=1;
                if(stopRightOneN >= 1000 && param == 132){
                    stopRightOneN = 0;
                    blocksRightOneN = 0;
                    stopRightOne = false;
                    blocksRightOne = true;
                }
            }
            else if(stopRightTwo) {
                //console.log('bb');
                stopRightTwoN += 1;
                this.x -=2;
                if(stopRightTwoN >= 1000 && param == 132){
                    stopRightOne = true;
                    stopRightTwoN = 0;
                    blocksRightTwoN = 0;
                    stopRightTwo = false;
                }
            }
            else if(stopRightThree) {
                //console.log('cc');
                stopRightThreeN += 1;
                this.x -=3;
                if(stopRightThreeN >= 1000 && param == 132){
                    stopRightTwo = true;
                    stopRightThreeN = 0;
                    blocksRightThreeN = 0;
                    stopRightThree = false;
                }
            }
            else if(stopRightFour) {
                //console.log('ee');
                stopRightFourN += 1;
                this.x -=4;
                if(stopRightFourN >= 1000 && param == 132){
                    stopRightThree = true;
                    stopRightFourN = 0;
                    blocksRightFourN = 0;
                    stopRightFour = false;
                }
            }
        }
    }
    if(topDetect > 0 && !mario.isAnimating) {
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

    // ----- reset ----- //
    if(mario.y > 640) {
        noLoop();
        clear();
        background(200);
        for(let x=0; x<blocks.length; x++) {
            blocks[x].x += mapOffset;
            blocks[x].show();
            blocks[x].showCentre();
            blocks[x].booped = false;
            if(enemies[x]) {
                enemies[x].x = enemies[x].originX;
                enemies[x].y = enemies[x].originY;
                enemies[x].steps = 100;
                enemies[x].show();
                enemies[x].fainted = false;
            }
        }
        mapOffset = 0;
        mario.x = 11*blockSize;
        mario.y = 12*blockSize;
        mario.isJumping = false;
        mario.isFalling = false;
        mario.isAnimating = false;
        mario.show();
        mario.showCentre();
        setTimeout(() => {
            loop();
        },50)
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

keyReleased = () => {
    if(keyCode == 39) {
        if(blocksRightOne && leftDetect == 0 && rightDetect == 0 && !mario.isAnimating) {
            stopRightOne = true;
            blocksRightOne = false;
            //console.log('a');
        }
        else if(blocksRightTwo && leftDetect == 0 && rightDetect == 0 && !mario.isAnimating) {
            stopRightTwo = true;
            blocksRightTwo = false;
            //console.log('b');
        }
        else if(blocksRightThree && leftDetect == 0 && rightDetect == 0 && !mario.isAnimating) {
            stopRightThree = true;
            blocksRightThree = false;
            //console.log('c');
        }
        else if(blocksRightFour && leftDetect == 0 && rightDetect == 0 && !mario.isAnimating) {
            stopRightFour = true;
            blocksRightFour = false;
            //console.log('e');
        }
        else if(sprint && leftDetect == 0 && rightDetect == 0 && !mario.isAnimating) {
            stopRightFour = true;
            sprint = false;
            //console.log('e');
        }
    }
}
  
