
setup = () => {
    createCanvas(960,600);
    //console.log(enemies[0].type);
}

draw = () => {
    topDetect = 0;
    bottomDetect = 0;
    leftDetect = 0;
    rightDetect = 0;
    clear();
    background(200);
    if(mario.x < 440) {
        currentPos = mario.x-440;
    }
    if(rightRegen) {
        if(slide > 0) {
            slide--;
            if(leftDetect == 0) {
                mapOffset += Math.floor(slide/10);
                if(currentPos < 0) {
                    if((Math.floor(slide/10) + currentPos) > 0) {
                        currentPos = 0;
                    } else {
                        mapOffset += Math.floor(slide/10);
                    }
                }
            }
        } else {
            rightRegen = false;
        }
    }
    if(leftRegen) {
        if(slide < 0) {
            slide++;
        } else {
            leftRegen = false;
        }
    }
    if(mario.x < -440) {
        mario.x = -440;
        currentPos = -440;
        mapOffset = -440;
    }
    if(rightRegen) {
        if(slide > 0) {
            slide--;
        } else {
            rightRegen = false;
        }
    }
    if(leftRegen) {
        if(slide < 0) {
            slide++;
        } else {
            leftRegen = false;
        }
    }

    for(let x=0; x<blocks.length; x++) {
        //only draw whats on the screen
         if(blocks[x].x < 960 && blocks[x].x > -40) {
            blocks[x].show();
            blocks[x].detectMario();
            blocks[x].detectEnemy();
            blocks[x].showCoin();
            if(blocks[x].coinHit) {
                blocks[x].raiseCoin();
            }
            //blocks[x].showCentre();
            //blocks[x].showLanding();
            blocks[x].adjust();

        }
        if(enemies[x]) {
            if(enemies[x].x < 960 && enemies[x].x > -40) {
                enemies[x].show();
                enemies[x].randomMove();
                enemies[x].detectMario();
                enemies[x].topDetect();
                
                    //enemies beside each other and gaps events

                    

                    // if(dist(enemies[2].x+20,enemies[2].y,enemies[3].x+20,enemies[3].y) <= 40) {
                    //     console.log('d');
                    //     if(enemies[2].stepLeft) {
                    //         enemies[2].x+=2;
                    //         enemies[2].stepLeft = false;
                    //         enemies[2].stepRight = true;
                    //         enemies[3].stepLeft = true;
                    //         enemies[3].stepRight = false;
                    //         enemies[2].steps = 50;
                    //         enemies[3].steps = 50;
                    //     } else {
                    //         enemies[2].x-=2;
                    //         enemies[2].stepLeft = true;
                    //         enemies[2].stepRight = false;
                    //         enemies[3].stepLeft = false;
                    //         enemies[3].stepRight = true;
                    //         enemies[2].steps = 50;
                    //         enemies[3].steps = 50;
                    //     }
                    // }




                    if(x == 4 && enemies[4].x+40 < blocks[37].x && enemies[4].x+40 > blocks[34].x && enemies[4].y+40 != blocks[36].y && enemies[4].y != 480) {
                        enemies[4].y += 5;
                    }
                    if(x == 4 && enemies[4].x+40 < blocks[34].x && enemies[4].y+40 != blocks[blocks.length-1].y && enemies[4].y != 480) {
                        enemies[4].y += 5;
                    }
                    if(x == 5 && enemies[5].x+40 < blocks[37].x && enemies[5].x+40 > blocks[34].x && enemies[5].y+40 != blocks[36].y && enemies[5].y != 480) {
                        enemies[5].y += 5;
                    }
                    if(x == 5 && enemies[5].x+40 < blocks[34].x && enemies[5].y+40 != blocks[blocks.length-1].y && enemies[5].y != 480) {
                        enemies[5].y += 5;
                    }
                    if(x == 4 && enemies[4].x <= blocks[238].x) {
                        enemies[4].x +=2;
                        enemies[4].stepLeft = false;
                        enemies[4].stepRight = true;
                        enemies[4].steps = 50;
                    }
                    if(x == 5 && enemies[5].x <= blocks[238].x) {
                        enemies[5].x +=2;
                        enemies[5].stepLeft = false;
                        enemies[5].stepRight = true;
                        enemies[5].steps = 50;
                    }
                    if(x == 4 && enemies[4].x+40 >= blocks[252].x && enemies[4].y == 480) {
                        enemies[4].x -=2;
                        enemies[4].stepRight = false;
                        enemies[4].stepLeft = true;
                        enemies[4].steps = 50;
                    }
                    if(x == 5 && enemies[5].x+40 >= blocks[252].x && enemies[5].y == 480) {
                        enemies[5].x -=2;
                        enemies[5].stepRight = false;
                        enemies[5].stepLeft = true;
                        enemies[5].steps = 50;
                    }
                
            }
        }
        if(mario.isJumping) {
            blocks[x].marioContact = false;
        }
    }

    if((keyIsDown(RIGHT_ARROW) && leftDetect == 0 && !mario.isAnimating) || (rightRegen && leftDetect == 0)) {
        if(slide < 50) {
            slide++;
        }

        if(currentPos >= 0 && slide >= 0) {
            currentPos = 0;
            // if(mario.isJumping) {
            //     mapOffset +=5;
            // } else {
                if(slide < 10) {
                    mapOffset += 1;
                } else if(slide >= 10) {
                    mapOffset += Math.floor(slide/10);
                }
            //}
            for(let x=0; x<blocks.length; x++) {
                blocks[x].goLeft();
                if(enemies[x]) {
                    enemies[x].goLeft();
                }
        }
        } 
        else {
            // if(mario.isJumping) {
            //     mapOffset +=5;
            //     mario.x += 5;
            //     currentPos +=5;
            //     mapOffset +=5;
            // } else {
                if(slide < 10) {
                    mario.x += 1;
                    currentPos += 1;
                    mapOffset += 1;
                } else if(slide >= 10) {
                    mario.x += Math.floor(slide/10);
                    currentPos += Math.floor(slide/10);
                    mapOffset += Math.floor(slide/10);
                }
            //}
        }
        }

    if((keyIsDown(LEFT_ARROW) && rightDetect == 0 && !mario.isAnimating) || (leftRegen && rightDetect == 0)) {
        if(slide > -50) {
            slide--;
        }
        if(currentPos > -440 && slide <= 0) {
            if(leftRegen && !mario.isJumping && !mario.isFalling && rightDetect == 0) {
                mario.x += Math.floor(slide/10);
            } else {
                // if(mario.isJumping) {
                //     mapOffset -=5;
                //     mario.x -=5;
                //     currentPos -= 5;
                //     mapOffset -= 5;
                // } else {
                    if(slide > -10) {
                        mario.x += -1
                        currentPos += -1;
                        mapOffset += -1;
                    } else if(slide <= -10) {
                        mario.x += Math.floor(slide/10);
                        currentPos += Math.floor(slide/10);
                        mapOffset += Math.floor(slide/10);      
                    }
                //}
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
    // if(mario.isJumping) {
    //     mario.y -= 5;
    // }
    // if(mario.isJumping) {
    //     if(jumpDistance <= 0) {
    //         mario.isJumping = false;
    //         mario.isFalling = true;
    //     }
    //     jumpDistance -=5;
    //     mario.y -=5;
    // }
    
    if(mario.isJumping) {
        mario.y -= 5;
        jumpHeight += 5;
    }
    // ------  falling  ------- //
    if(mario.isFalling) {
        mario.y +=5;
        jumpHeight -=5;
    }

    // ----- reset ----- //
    if(mario.y >= 640) {
        noLoop();
        clear();
        background(200);
        for(let x=0; x<blocks.length; x++) {
            blocks[x].x += mapOffset;
            blocks[x].show();
            //blocks[x].showCentre();
            blocks[x].showCoin();
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
        mario.canJump = true;
        mario.show();
        mario.showCentre();
        setTimeout(() => {
            loop();
        },50)
    }
    // if(keyIsDown(32) && !mario.isFalling) {
    //     if(jumpHeight < 100) {
    //         jumpHeight+=5;
    //         mario.y-=5;
    //     } 
    //     else if(jumpHeight == 0) {
    //         mario.isFalling = false;
    //         mario.isJumping = true;
    //     }
    //     else {
    //         mario.isFalling = true;
    //         mario.isJumping = false;

    //     }
    // } 
    // else {
    //     if(jumpHeight > 0) {
    //         mario.isJumping = false;
    //         mario.isFalling = true;
    //         jumpHeight -=5;
    //     }
    // }
    if(keyIsDown(32)) {
        if(jumpHeight >= 0 && !mario.isFalling && mario.canJump) {
            mario.isJumping = true;
        } 
        if(jumpHeight >= 180 && !mario.isFalling) {
            mario.isFalling = true;
            mario.isJumping = false;
            mario.canJump = false;
        }
        else if(jumpHeight == 0 && mario.isFalling) {
            mario.isFalling = false;
        }
    }
}

keyReleased = () => {
    if(keyCode == 39) {
        rightRegen = true;
    } 
    if(keyCode == 32) {
        mario.canJump = true;
        mario.isFalling = true;
        mario.isJumping = false;
    }
    else if(keyCode == 37) {
        leftRegen = true;
    }
}
