preload = () => {
    theme = loadSound('sound/theme.mp4');
}

// ------TODO-----
// fix map background
// koopa sprites
// end level stuff castle etc.

setup = () => {
    createCanvas(960,600);
    img = loadImage('img/Untitledmap.png');  

    theme.play();

    goomba1 = loadImage('img/goomba1.png');
    goomba2 = loadImage('img/goomba2.png');
    goomba3 = loadImage('img/goomba3.png');
    ground = loadImage('img/ground.png');
    question = loadImage('img/question.png');
    question2 = loadImage('img/question2.png');
    question3 = loadImage('img/question3.png');
    solid = loadImage('img/solid.png');
    block = loadImage('img/block.png');
    brick = loadImage('img/brick.png');
    mushroom = loadImage('img/mushroom.png');
    koopaleft = loadImage('img/koopaleft.png');
    kooparight = loadImage('img/kooparight.png');
    shell = loadImage('img/shell.png');
    block80 = loadImage('img/block80.png');
    block120 = loadImage('img/block120.png');
    block160 = loadImage('img/block160.png');
    coin = loadImage('img/coin.png');

    marioright = loadImage('img/mario/marioright.png');
    marioleft = loadImage('img/mario/marioleft.png');
    mariojump = loadImage('img/mario/mariojump.png');
    mariojumpl = loadImage('img/mario/mariojumpl.png');
    walk1 = loadImage('img/mario/walk1.png');
    walk2 = loadImage('img/mario/walk2.png');
    walk3 = loadImage('img/mario/walk3.png');
    walk1l = loadImage('img/mario/walk1l.png');
    walk2l = loadImage('img/mario/walk2l.png');
    walk3l = loadImage('img/mario/walk3l.png');
    mariobump = loadImage('img/mario/mariobump.png');
    mariobumpl = loadImage('img/mario/mariobumpl.png');
    skidleft = loadImage('img/mario/skidleft.png');
    skidright = loadImage('img/mario/skidright.png');

    bmarioright = loadImage('img/mario/bmarioright.png');
    bmarioleft = loadImage('img/mario/bmarioleft.png');
    bmariojump = loadImage('img/mario/bmariojump.png');
    bmariojumpl = loadImage('img/mario/bmariojumpl.png');
    bwalk1 = loadImage('img/mario/bwalk1.png');
    bwalk2 = loadImage('img/mario/bwalk2.png');
    bwalk3 = loadImage('img/mario/bwalk3.png');
    bwalk1l = loadImage('img/mario/bwalk1l.png');
    bwalk2l = loadImage('img/mario/bwalk2l.png');
    bwalk3l = loadImage('img/mario/bwalk3l.png');
    bmariobump = loadImage('img/mario/bmariobump.png');
    bmariobumpl = loadImage('img/mario/bmariobumpl.png');
    bskidleft = loadImage('img/mario/bskidleft.png');
    bskidright = loadImage('img/mario/bskidright.png');

    crouch = loadImage('img/mario/crouch.png');
    crouchl = loadImage('img/mario/crouchl.png');
    fainted = loadImage('img/mario/fainted.png');

    luigi = loadImage('img/mario/luigi.png');

    sbricksmash = loadSound('sound/bricksmash.wav');
    sbump = loadSound('sound/bump.wav');
    scoin = loadSound('sound/coin.wav');
    smarioFaint = loadSound('sound/marioFaint.wav');
    smushroomAppear = loadSound('sound/mushroomAppear.wav');
    spowerup = loadSound('sound/powerup.wav');
    ssmallJump = loadSound('sound/smallJump.wav');
    stimeWarning = loadSound('sound/timeWarning.wav');
    sskid = loadSound('sound/Skid.wav');
    ssquish = loadSound('sound/Squish.wav');
    smariohit = loadSound('sound/mariohit.wav');
}

let coins = 0;
let score = 0;

setInterval(() => {
    document.getElementById('score').innerHTML = score;
}, 500);

setInterval(() => {
    document.getElementById('coins').innerHTML = coins;
}, 500);

let time = 400;

setInterval(() => {
    time--;
    if(time == 20) {
        console.log('20');
        stimeWarning.play();
    }
    if(time == 0) {
        console.log('0');
        theme.stop();
        mario.y = 641;
    
    }
    document.getElementById('time').innerHTML = time;
}, 500);





function background(x) {
    this.x = x;
    this.show = () => {
        image(img, this.x, 0, img.width*2, img.height*2.25);
        //image(img2, this.x, img.height*2.23, img2.width*2, img2.height*2.25);
    }
    this.move = () => {
        this.x -=1;
    }
}

let backg1 = new background(0);
let backg2 = new background(960);
let backg3 = new background(960*2);
let backg4 = new background(960*3);

let state = 0;
setInterval(() => {
    //state == 0 ? 1 : 0;
    if(state == 0) {
        state = 1;
    } else {
        state = 0;
    }
},300);

let marioState = 0;
setInterval(() => {
    if(marioState == 0) {
        marioState = 1;
    } 
    else if(marioState == 1) {
        marioState = 2;
    }
    else if(marioState == 2) {
        marioState = 0;
    }
},300);

let questionState = 0;
setInterval(() => {
    if(questionState == 0) {
        questionState = 3;
    } 
    else if(questionState == 3) {
        questionState = 2;
    }
    else if(questionState == 2) {
        questionState = 0;
    }
},200);



draw = () => {
    //console.log(mario.isAnimating);
    topDetect = 0;
    bottomDetect = 0;
    leftDetect = 0;
    rightDetect = 0;
    clear();
    //background(200);
    //image(img, 0, 0);
    backg1.show(); 
    backg2.show();    
    backg3.show();    
    backg4.show();  

    image(block80, blocks[7].x, blocks[7].y, block80.width, block80.height);
    image(block120, blocks[11].x, blocks[11].y-40, block120.width, block120.height);
    image(block160, blocks[20].x, blocks[20].y, block160.width, block160.height);
    image(block160, blocks[28].x, blocks[28].y, block160.width, block160.height);
    image(block80, blocks[111].x, blocks[111].y, block80.width, block80.height);
    image(block80, blocks[118].x, blocks[111].y, block80.width, block80.height);



    if(mario.x < 440) {
        currentPos = mario.x-440;
    }
    if(rightRegen) {
        if(slide > 0) {
            slide--;
            if(leftDetect == 0) {
                //mapOffset += Math.floor(slide/10);
                if(currentPos < 0) {
                    if((Math.floor(slide/10) + currentPos) > 0) {
                        currentPos = 0;
                    } 
                    // else {
                    //     mapOffset += Math.floor(slide/10);
                    // }
                }
            }
        } else {
            rightRegen = false;
        }
    }
    if(leftRegen) {
        if(slide < 0) {
            slide++;
            //mapOffset += Math.floor(slide/10);
        } else {
            leftRegen = false;
        }
    }
    if(mario.x < -440) {
        mario.x = -440;
        currentPos = -440;
        //mapOffset = -440;
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

    if(blocks[2].mushroom && (blocks[2].mushroomY != 0 || blocks[2].mushroomActive)) {
        image(mushroom, blocks[2].x + blocks[2].mushroomX,blocks[2].y + blocks[2].mushroomY,40,40);
    }

    if(blocks[35].mushroom && (blocks[35].mushroomY != 0 || blocks[35].mushroomActive)) {
        image(mushroom, blocks[35].x + blocks[35].mushroomX,blocks[35].y + blocks[35].mushroomY,40,40);
    }

    if(blocks[2].mushroomActive) {
        if(dist(mario.x+20,mario.y+20,(blocks[2].x+blocks[2].mushroomX)+20,(blocks[2].y+blocks[2].mushroomY)) <= 40) {
            blocks[2].mushroom = false;
            blocks[2].mushroomActive = false;
            blocks[2].mushroomY = 999;
            if(!mario.isBig && !mario.isAnim) {
                mario.mushroomAnimate();
            }
        }

        blocks[2].mushroomX += blocks[2].mushroomXMove;
        if(blocks[2].x+blocks[2].mushroomX < blocks[7].x && blocks[2].x+blocks[2].mushroomX+40 > blocks[7].x) {
            blocks[2].mushroomXMove = -2;
        }
        if(!blocks[2].mushroomGround && blocks[2].x+blocks[2].mushroomX > blocks[6].x+40) {
            if(blocks[2].y+blocks[2].mushroomY > 480) {
                blocks[2].mushroomY = 480 - blocks[2].y;
                blocks[2].mushroomGround = true;
            } else {
                blocks[2].mushroomY += 5;
            }
        }
    }   

    if(blocks[35].mushroomActive) {
        if(dist(mario.x+20,mario.y+20,(blocks[35].x+blocks[35].mushroomX)+20,(blocks[35].y+blocks[35].mushroomY)) <= 40) {
            blocks[35].mushroom = false;
            blocks[35].mushroomActive = false;
            blocks[35].mushroomY = 999;
            if(!mario.isBig && !mario.isAnim) {
                mario.mushroomAnimate();
            }
        }

        blocks[35].mushroomX += blocks[35].mushroomXMove;

        if(!blocks[35].mushroomGround && (blocks[36].y === 999 || blocks[36].y === 1004) && blocks[35].x+blocks[35].mushroomX > blocks[35].x+40) {
            if(blocks[35].y+blocks[35].mushroomY > 480) {
                blocks[35].mushroomY = 480 - blocks[35].y;
                blocks[35].mushroomGround = true;
            } else {
                blocks[35].mushroomY += 5;
            }
        }
        if(!blocks[35].mushroomGround && blocks[35].x+blocks[35].mushroomX > blocks[36].x+40) {
            if(blocks[35].y+blocks[35].mushroomY > 480) {
                blocks[35].mushroomY = 480 - blocks[35].y;
                blocks[35].mushroomGround = true;
            } else {
                blocks[35].mushroomY += 5;
            }
        }
        if(blocks[35].x+blocks[35].mushroomX > blocks[42].x+40) {
            blocks[35].mushroomY += 5;
        }
    }  

    if(enemies[8].x < 960 && enemies[8].x > -40 || enemies[8].power) {
        enemies[8].randomMove();
    }
        enemies[8].detectMario();
        enemies[8].topDetect();
        if(enemies[8].x+40 >= blocks[66].x) {
            enemies[8].stepRight = false;
            enemies[8].stepLeft = true;
        }
        if(enemies[8].x+40 < blocks[42].x+120 && enemies[8].x > blocks[42].x+120) {
            enemies[8].stepRight = false;
            enemies[8].stepLeft = true;
            enemies[8].y+=5
        }
        // if(enemies[8].x < blocks[42].x+120) {
        //     enemies[8].stepRight = false;
        //     enemies[8].stepLeft = true;
        //     enemies[8].y+=5;
        // }



        if(enemies[8].power) {
            if(dist(enemies[8].x,enemies[8].y,enemies[5].x,enemies[5].y) <= 40) {
                ssquish.play();
                enemies[5].bump();
            }
            if(dist(enemies[8].x,enemies[8].y,enemies[7].x,enemies[7].y) <= 40) {
                ssquish.play();
                enemies[7].bump();
            }
            if(dist(enemies[8].x,enemies[8].y,enemies[6].x,enemies[6].y) <= 40) {
                ssquish.play();
                enemies[6].bump();
            }
            if(dist(enemies[8].x,enemies[8].y,enemies[7].x,enemies[7].y) <= 40) {
                ssquish.play();
                enemies[7].bump();
            }
            if(dist(enemies[8].x,enemies[8].y,enemies[9].x,enemies[9].y) <= 40) {
                ssquish.play();
                enemies[9].bump();
            }
            if(dist(enemies[8].x,enemies[8].y,enemies[10].x,enemies[10].y) <= 40) {
                ssquish.play();
                enemies[10].bump();
            }
            if(dist(enemies[8].x,enemies[8].y,enemies[11].x,enemies[11].y) <= 40) {
                ssquish.play();
                enemies[11].bump();
            }
            if(dist(enemies[8].x,enemies[8].y,enemies[12].x,enemies[12].y) <= 40) {
                ssquish.play();
                enemies[12].bump();
            }
            if(dist(enemies[8].x,enemies[8].y,enemies[13].x,enemies[13].y) <= 40) {
                ssquish.play();
                enemies[13].bump();
            }
            if(dist(enemies[8].x,enemies[8].y,enemies[14].x,enemies[14].y) <= 40) {
                ssquish.play();
                enemies[14].bump();
            }
                
            }

    for(let x=0; x<enemies.length; x++) {
        if(enemies[x].x > 960 || enemies[x].x < -40) { 
            if(enemies[x].bumped) {
                enemies[x].y = 999;
            }
        }
    }

    for(let x=0; x<blocks.length; x++) {
        //only draw whats on the screen
         if(blocks[x].x < 960 && blocks[x].x > -40) {
            blocks[x].show();
            if(blocks[x].type == 'ground') {
                image(ground, blocks[x].x, blocks[x].y, ground.width, ground.height);
                image(ground, blocks[x].x, blocks[x].y+40, ground.width, ground.height);
            }
            if(blocks[x].coin || blocks[x].mushroom) {
                if(questionState == 0) {
                    image(question, blocks[x].x, blocks[x].y, question.width, question.height);
                }
                if(questionState == 3) {
                    image(question3, blocks[x].x, blocks[x].y, question3.width, question3.height);
                }
                if(questionState == 2) {
                    image(question2, blocks[x].x, blocks[x].y, question2.width, question2.height);
                }
            }
            if(blocks[x].solid) {
                image(solid, blocks[x].x, blocks[x].y, solid.width, solid.height);
            }
            if(blocks[x].type == 'block' && !blocks[x].coin && !blocks[x].mushroom && !blocks[x].solid) {
                image(brick, blocks[x].x, blocks[x].y, brick.width, brick.height);
            }
            if(blocks[x].type == 'brick') {
                image(block,blocks[x].x, blocks[x].y, block.width, block.height);
            }
            if(blocks[x].coin && blocks[x].coinHit) {
                image(coin,blocks[x].x+10,blocks[x].starY,20,30);
            }
            blocks[x].detectMario();
            blocks[x].detectEnemy();
            blocks[x].showCoin();
            blocks[x].showMushroom();
            if(blocks[x].mushroom && (blocks[x].mushroomY != 0 || blocks[x].mushroomActive)) {
                image(mushroom, blocks[x].x + blocks[x].mushroomX,blocks[x].y + blocks[x].mushroomY,40,40);
            }

            if(blocks[x].bumpEnemy) {
                if(enemies[4].x > blocks[x].x-39 && enemies[4].x < blocks[x].x+40 && dist(blocks[x].x,blocks[x].y,enemies[4].x,enemies[4].y) <= 50) {
                    enemies[4].bump();
                }
                if(enemies[5].x > blocks[x].x-39 && enemies[5].x < blocks[x].x+40 && dist(blocks[x].x,blocks[x].y,enemies[5].x,enemies[5].y) <= 50) {
                    enemies[5].bump();
                }
            }
            if(blocks[x].coinHit) {
                blocks[x].raiseCoin();
            }
            if(blocks[x].mushroomHit) {
                blocks[x].raiseMushroom();
            }
            // if(x == 2 && blocks[x].mushroomActive) {
            //     if(dist(mario.x+20,mario.y+20,(blocks[x].x+blocks[x].mushroomX)+20,(blocks[x].y+blocks[x].mushroomY)) <= 40) {
            //         blocks[x].mushroom = false;
            //         blocks[x].mushroomActive = false;
            //         blocks[x].mushroomY = 999;
            //         if(!mario.isBig && !mario.isAnim) {
            //             mario.mushroomAnimate();
            //         }
            //     }

            //     blocks[x].mushroomX += blocks[x].mushroomXMove;
            //     if(blocks[x].x+blocks[x].mushroomX < blocks[7].x && blocks[x].x+blocks[x].mushroomX+40 > blocks[7].x) {
            //         blocks[x].mushroomXMove = -2;
            //     }
            //     if(!blocks[x].mushroomGround && blocks[x].x+blocks[x].mushroomX > blocks[6].x+40) {
            //         if(blocks[x].y+blocks[x].mushroomY > 480) {
            //             blocks[x].mushroomY = 480 - blocks[x].y;
            //             blocks[x].mushroomGround = true;
            //         } else {
            //             blocks[x].mushroomY += 5;
            //         }
            //     }
            // }   
            // if(x == 35 && blocks[x].mushroomActive) {
            //     if(dist(mario.x+20,mario.y+20,(blocks[x].x+blocks[x].mushroomX)+20,(blocks[x].y+blocks[x].mushroomY)) <= 40) {
            //         blocks[x].mushroom = false;
            //         blocks[x].mushroomActive = false;
            //         blocks[x].mushroomY = 999;
            //         if(!mario.isBig && !mario.isAnim) {
            //             mario.mushroomAnimate();
            //         }
            //     }

            //     blocks[x].mushroomX += blocks[x].mushroomXMove;
            //     // if(blocks[x].x+blocks[x].mushroomX < blocks[7].x && blocks[x].x+blocks[x].mushroomX+40 > blocks[7].x) {
            //     //     blocks[x].mushroomXMove = -2;
            //     // }
            //     if(!blocks[x].mushroomGround && blocks[x].x+blocks[x].mushroomX > blocks[36].x+40) {
            //         if(blocks[x].y+blocks[x].mushroomY > 480) {
            //             blocks[x].mushroomY = 480 - blocks[x].y;
            //             blocks[x].mushroomGround = true;
            //         } else {
            //             blocks[x].mushroomY += 5;
            //         }
            //     }
            //     if(blocks[x].x+blocks[x].mushroomX > blocks[42].x+40) {
            //         blocks[x].mushroomY += 5;
            //     }
            // }          
            //blocks[x].showCentre();
            //blocks[x].showLanding();
            blocks[x].adjust();
        }
        if(enemies[x]) {
            if(enemies[x].x < 960 && enemies[x].x > -40) {
                //enemies[x].show();
                if(enemies[x].type === 'goomba' && !enemies[x].bumped) {
                    if(state === 0) {
                        image(goomba1, enemies[x].x, enemies[x].y, goomba1.width, goomba1.height);
                    }
                    if(state === 1) {
                        image(goomba2, enemies[x].x, enemies[x].y, goomba1.width, goomba1.height);
                    }
                }
                if(enemies[x].type === 'goomba' && enemies[x].bumped) {
                    image(goomba3, enemies[x].x, enemies[x].y, goomba1.width, goomba1.height);
                }
                // if(!enemies[x].shell && !enemies[x].power && enemies[x].type === 'koopatroopa' && enemies[x].stepLeft && !enemies[x].stepRight) {
                //     image(koopaleft, enemies[x].x, enemies[x].y-18, koopaleft.width, koopaleft.height);
                // }
                // if(!enemies[x].shell && !enemies[x].power && enemies[x].type === 'koopatroopa' && enemies[x].stepRight && !enemies[x].stepLeft) {
                //     image(kooparight, enemies[x].x, enemies[x].y-18, kooparight.width, kooparight.height);
                // }
                if(enemies[x].type === 'koopatroopa' && !enemies[x].shell && !enemies[x].power) {
                    image(koopaleft, enemies[x].x, enemies[x].y-18, koopaleft.width, koopaleft.height);
                }
                if((enemies[x].shell || enemies[x].power)) {
                    image(shell, enemies[x].x, enemies[x].y, shell.width, shell.height);
                }
                if(x !== 8) {
                    enemies[x].randomMove();
                    enemies[x].detectMario();
                    enemies[x].topDetect();
                } 

                if(enemies[x].bumped) {
                    enemies[x].y += 2;
                }
                
                    //enemies beside each other, mushroom and gaps events
                    // if(dist(blocks[6].x+40,blocks[6].y,blocks[2].x+blocks[2].mushroomX,blocks[2].y+blocks[2].mushroomY) < 5) {
                    //     blocks[2].mushroomY += 2;
                    // }

                    if(enemies[x+1] && !enemies[x].power) {
                    if(dist(enemies[x].x+20,enemies[x].y,enemies[x+1].x+20,enemies[x].y) <= 40) {
                        if(enemies[x].stepLeft) {
                            enemies[x].x+=2;
                            enemies[x].stepLeft = false;
                            enemies[x].stepRight = true;
                            enemies[x+1].stepRight = false;
                            enemies[x+1].stepLeft = true;
                            enemies[x].steps = 50;
                            enemies[x+1].steps = 50;
                        } else {
                            enemies[x].x-=2;
                            enemies[x].stepRight = false;
                            enemies[x].stepLeft = true;
                            enemies[x+1].stepLeft = false;
                            enemies[x+1].stepRight = true;
                            enemies[x].steps = 50;
                            enemies[x+1].steps = 50;
                        }
                    } 
                    }
                    if(x == 0) {
                        enemies[0].stepLeft = true;
                    }
                    if(enemies[2].x <= blocks[21].x+40) {
                        enemies[2].stepLeft = false;
                        enemies[2].stepRight = true;
                        enemies[3].stepLeft = false;
                        enemies[3].stepRight = true;
                    }
                    if(enemies[3].x+40 >= blocks[25].x) {
                        enemies[3].stepLeft = true;
                        enemies[3].stepRight = false;
                        enemies[4].stepLeft = true;
                        enemies[4].stepRight = false;
                    }
                    if(x == 4) {
                        enemies[4].stepLeft = true;
                    }
                    if(x == 5) {
                        enemies[5].stepLeft = true;
                    }
                    if(x == 4 && enemies[4].x+40 < blocks[37].x && enemies[4].x+40 > blocks[34].x && enemies[4].y+40 != blocks[35].y && !blocks[35].bumpEnemy && enemies[4].y != 480) {
                        enemies[4].y += 5;
                    }
                    if(x == 4 && (blocks[34].y === 999 || blocks[34].y === 1004) && enemies[4].x+40 < blocks[35].x && enemies[4].y != 480) {
                        enemies[4].y += 1;
                        if(enemies[4].y > 480 && enemies[4].x >= blocks[238].x-40 && !enemies[4].bumped && !enemies[4].fainted) {
                            enemies[4].y = 480;
                        }
                    }
                    if(x == 4 && enemies[4].x+40 < blocks[34].x && enemies[4].y+40 != blocks[blocks.length-1].y && enemies[4].y != 480) {
                        enemies[4].y += 5;
                    }
                    if(x == 5 && enemies[5].x+40 < blocks[37].x && (blocks[34].y == 999 || blocks[34].y === 1004) && enemies[5].x+40 < blocks[35].x && !blocks[35].bumpEnemy && enemies[5].y != 480) {
                        enemies[5].y += 1;
                    }
                    if(x == 5 && enemies[5].x+40 < blocks[37].x && enemies[5].x+40 > blocks[34].x && enemies[5].y+40 != blocks[35].y && !blocks[35].bumpEnemy && enemies[5].y != 480) {
                        enemies[5].y += 5;
                    }
                    if(x == 5 && (blocks[34].y === 999 || blocks[34].y === 1004) && enemies[5].x+40 < blocks[35].x && enemies[5].y != 480) {
                        //enemies[5].y += 1;
                        if(enemies[5].y > 480 && enemies[5].x >= blocks[238].x-40 && !enemies[5].bumped && !enemies[5].fainted) {
                            enemies[5].y = 480;
                        }
                    }
                    if(x == 5 && enemies[5].x+40 < blocks[34].x && enemies[5].y+40 != blocks[blocks.length-1].y && enemies[5].y != 480) {
                        enemies[5].y += 5;
                    }
                    if(x == 4 && enemies[4].x <= blocks[238].x-40) {
                        //enemies[4].x +=2;
                        enemies[4].stepLeft = true;
                        //enemies[4].stepRight = true;
                        enemies[4].steps = 50;
                        enemies[4].y += 1;
                    }
                    if(x == 5 && enemies[5].x <= blocks[238].x-40) {
                        //enemies[4].x +=2;
                        enemies[5].stepLeft = true;
                        //enemies[4].stepRight = true;
                        enemies[5].steps = 50;
                        enemies[5].y += 1;
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


                    if(x == 7 && enemies[7].x+40 >= enemies[8].x && enemies[8].y == 480 && enemies[7].y == 480) {
                        enemies[7].stepRight = false;
                        enemies[7].stepLeft = true;
                        enemies[6].stepRight = false;
                        enemies[6].stepLeft = true;
                    }
                    if(x == 6 && enemies[6].x+40 >= enemies[8].x && enemies[8].y == 480 && enemies[6].y == 480) {
                        enemies[7].stepRight = false;
                        enemies[7].stepLeft = true;
                        enemies[6].stepRight = false;
                        enemies[6].stepLeft = true;
                    }

                    if(x == 9 && enemies[9].x <= enemies[8].x+40 && enemies[8].y == 480 && enemies[9].y == 480) {
                        enemies[9].stepRight = true;
                        enemies[9].stepLeft = false;
                        enemies[10].stepRight = true;
                        enemies[10].stepLeft = false;
                    }
                    if(x == 10 && enemies[10].x <= enemies[8].x+40 && enemies[8].y == 480 && enemies[10].y == 480) {
                        enemies[9].stepRight = true;
                        enemies[9].stepLeft = false;
                        enemies[10].stepRight = true;
                        enemies[10].stepLeft = false;
                    }
                
            }
        }
        if(mario.isJumping) {
            blocks[x].marioContact = false;
        }
    }


// ---------------------
    if(mario.isAnim) {
        image(luigi, mario.x,mario.y, luigi.width, luigi.height);
    }
    if(mario.isAnimating) {
        image(fainted, mario.x,mario.y, fainted.width, fainted.height);
    }

    if(mario.fright && !mario.isAnimating && keyIsDown(DOWN_ARROW) && mario.isBig && !keyIsDown(LEFT_ARROW) && !keyIsDown(RIGHT_ARROW) && slide === 0) {
        image(crouch, mario.x,mario.y, crouch.width, crouch.height);
    }

    if(mario.fleft && !mario.isAnimating && keyIsDown(DOWN_ARROW) && mario.isBig && !keyIsDown(LEFT_ARROW) && !keyIsDown(RIGHT_ARROW) && slide === 0) {
        image(crouchl, mario.x,mario.y, crouchl.width, crouchl.height);
    }

// ---------------------




// ---------------------sm
    
    if(!mario.isAnimating && mario.isSmall && mario.fright && mario.hasBumped) {
        image(mariobump, mario.x,mario.y, mariobump.width, mariobump.height);
    }
    if(!mario.isAnimating && mario.isSmall && mario.fleft && mario.hasBumped) {
        image(mariobumpl, mario.x,mario.y, mariobumpl.width, mariobumpl.height);
    }
    if((!mario.isAnimating && mario.canShow && !keyIsDown(RIGHT_ARROW) && mario.isSmall && !keyIsDown(LEFT_ARROW) && mario.fright && !mario.fleft && !mario.isJumping && !mario.isFalling) || !mario.isAnimating && keyIsDown(RIGHT_ARROW) && leftDetect != 0 && !mario.isFalling && !mario.isJumping && mario.isSmall) {
        image(marioright, mario.x,mario.y, marioright.width, marioright.height);
    }

    if((!mario.isAnimating && mario.canShow && mario.isSmall && !keyIsDown(RIGHT_ARROW) && !keyIsDown(LEFT_ARROW) && mario.fleft && !mario.fright && !mario.isJumping && !mario.isFalling) || !mario.isAnimating && keyIsDown(LEFT_ARROW) && rightDetect != 0 && !mario.isFalling && !mario.isJumping && mario.isSmall) {
        image(marioleft, mario.x,mario.y, marioleft.width, marioleft.height);
    }
    
    if(!mario.isAnimating && mario.isSmall && slide > 0 && keyIsDown(LEFT_ARROW) && !mario.isJumping && !mario.isFalling && leftDetect === 0 && rightDetect === 0) {
        image(skidright, mario.x, mario.y, skidright.width, skidright.height);
    }

    if(!mario.isAnimating && mario.isSmall && slide < 0 && keyIsDown(RIGHT_ARROW) && !mario.isJumping && !mario.isFalling && leftDetect === 0 && rightDetect === 0) {
        image(skidleft, mario.x, mario.y, skidleft.width, skidleft.height);
    }

    if((!mario.isAnimating && mario.isSmall && keyIsDown(RIGHT_ARROW) && !mario.isFalling && !mario.isJumping && rightDetect === 0 && leftDetect === 0 && slide >= 0) || (!mario.isAnimating && mario.isSmall && slide > 0 && !keyIsDown(LEFT_ARROW) && !mario.isFalling && !mario.isJumping && rightDetect === 0 && leftDetect === 0)) {
        if(marioState === 0) {
            image(walk1, mario.x, mario.y, walk1.width, walk1.height);
        }
        if(marioState === 1) {
            image(walk2, mario.x, mario.y, walk2.width, walk2.height);
        }
        if(marioState === 2) {
            image(walk3, mario.x, mario.y, walk3.width, walk3.height);
        }
    }

    if((!mario.isAnimating && mario.isSmall && keyIsDown(LEFT_ARROW) && !mario.isFalling && !mario.isJumping && rightDetect === 0 && leftDetect === 0 && slide <= 0) || (!mario.isAnimating && mario.isSmall && slide < 0 && !keyIsDown(RIGHT_ARROW) && !mario.isFalling && !mario.isJumping && rightDetect === 0 && leftDetect === 0)) {
        if(marioState === 0) {
            image(walk1l, mario.x, mario.y, walk1l.width, walk1l.height);
        }
        if(marioState === 1) {
            image(walk2l, mario.x, mario.y, walk2l.width, walk2l.height);
        }
        if(marioState === 2) {
            image(walk3l, mario.x, mario.y, walk3l.width, walk3l.height);
        }
    }

    if(!mario.isAnimating && !mario.hasBumped && mario.isSmall && (mario.isFalling || mario.isJumping) && mario.fright && !mario.fleft && mario.isSmall) {
        image(mariojump, mario.x, mario.y, mariojump.width, mariojump.height);
    }
    if(!mario.isAnimating && !mario.hasBumped && mario.isSmall && (mario.isFalling || mario.isJumping) && mario.fleft && !mario.fright && mario.isSmall) {
        image(mariojumpl, mario.x, mario.y, mariojumpl.width, mariojumpl.height);
    }

// ------------------------/sm

// ---------------------bg
    
if(!mario.isAnimating && mario.isBig && mario.fright && mario.hasBumped) {
    image(bmariobump, mario.x,mario.y-40, bmariobump.width, bmariobump.height);
}
if(!mario.isAnimating && mario.isBig && mario.fleft && mario.hasBumped) {
    image(bmariobumpl, mario.x,mario.y-40, bmariobumpl.width, bmariobumpl.height);
}
if((!keyIsDown(DOWN_ARROW) && !mario.isAnimating && mario.canShow && !keyIsDown(RIGHT_ARROW) && mario.isBig && !keyIsDown(LEFT_ARROW) && mario.fright && !mario.fleft && !mario.isJumping && !mario.isFalling) || !keyIsDown(DOWN_ARROW) && !mario.isAnimating && keyIsDown(RIGHT_ARROW) && leftDetect != 0 && !mario.isFalling && !mario.isJumping && mario.isBig) {
    image(bmarioright, mario.x,mario.y-40, bmarioright.width, bmarioright.height);
}

if((!keyIsDown(DOWN_ARROW) && !mario.isAnimating && mario.canShow && mario.isBig && !keyIsDown(RIGHT_ARROW) && !keyIsDown(LEFT_ARROW) && mario.fleft && !mario.fright && !mario.isJumping && !mario.isFalling) || !keyIsDown(DOWN_ARROW) && !mario.isAnimating && keyIsDown(LEFT_ARROW) && rightDetect != 0 && !mario.isFalling && !mario.isJumping && mario.isBig) {
    image(bmarioleft, mario.x,mario.y-40, bmarioleft.width, bmarioleft.height);
}

if(!mario.isAnimating && mario.isBig && slide > 0 && keyIsDown(LEFT_ARROW) && !mario.isJumping && !mario.isFalling && leftDetect === 0 && rightDetect === 0) {
    image(bskidright, mario.x, mario.y-40, bskidright.width, bskidright.height);
}

if(!mario.isAnimating && mario.isBig && slide < 0 && keyIsDown(RIGHT_ARROW) && !mario.isJumping && !mario.isFalling && leftDetect === 0 && rightDetect === 0) {
    image(bskidleft, mario.x, mario.y-40, bskidleft.width, bskidleft.height);
}

if((!mario.isAnimating && mario.isBig && keyIsDown(RIGHT_ARROW) && !mario.isFalling && !mario.isJumping && rightDetect === 0 && leftDetect === 0 && slide >= 0) || (!mario.isAnimating && mario.isBig && slide > 0 && !keyIsDown(LEFT_ARROW) && !mario.isFalling && !mario.isJumping && rightDetect === 0 && leftDetect === 0)) {
    if(marioState === 0) {
        image(bwalk1, mario.x, mario.y-40, bwalk1.width, bwalk1.height);
    }
    if(marioState === 1) {
        image(bwalk2, mario.x, mario.y-40, bwalk2.width, bwalk2.height);
    }
    if(marioState === 2) {
        image(bwalk3, mario.x, mario.y-40, bwalk3.width, bwalk3.height);
    }
}

if((!mario.isAnimating && mario.isBig && keyIsDown(LEFT_ARROW) && !mario.isFalling && !mario.isJumping && rightDetect === 0 && leftDetect === 0 && slide <= 0) || (!mario.isAnimating && mario.isBig && slide < 0 && !keyIsDown(RIGHT_ARROW) && !mario.isFalling && !mario.isJumping && rightDetect === 0 && leftDetect === 0)) {
    if(marioState === 0) {
        image(bwalk1l, mario.x, mario.y-40, bwalk1l.width, bwalk1l.height);
    }
    if(marioState === 1) {
        image(bwalk2l, mario.x, mario.y-40, bwalk2l.width, bwalk2l.height);
    }
    if(marioState === 2) {
        image(bwalk3l, mario.x, mario.y-40, bwalk3l.width, bwalk3l.height);
    }
}

if(!mario.isAnimating && !mario.hasBumped && mario.isBig && (mario.isFalling || mario.isJumping) && mario.fright && !mario.fleft && mario.isBig) {
    image(bmariojump, mario.x, mario.y-40, bmariojump.width, bmariojump.height);
}
if(!mario.isAnimating && !mario.hasBumped && mario.isBig && (mario.isFalling || mario.isJumping) && mario.fleft && !mario.fright && mario.isBig) {
    image(bmariojumpl, mario.x, mario.y-40, bmariojumpl.width, bmariojumpl.height);
}

// ------------------------/bg


    if((keyIsDown(RIGHT_ARROW) && leftDetect == 0 && !mario.isAnimating)) {  
        if(currentPos >= 0) {
            backg1.move();    
            backg2.move();    
            backg3.move();    
            backg4.move(); 
        }  
    }
    if(keyIsDown(RIGHT_ARROW)) {
        mario.fleft = false;
        mario.fright = true;
    }
    if((keyIsDown(RIGHT_ARROW) && leftDetect == 0 && !mario.isAnimating) || (rightRegen && leftDetect == 0) && !mario.isAnimating) {
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

    if(keyIsDown(LEFT_ARROW)) {
        mario.fright = false;
        mario.fleft = true;
    }
    if((keyIsDown(LEFT_ARROW) && rightDetect == 0 && !mario.isAnimating) || (leftRegen && rightDetect == 0) && !mario.isAnimating) {
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
    //mario.showCentre();

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
    if(mario.y >= 640 && mario.hitEnemy) {
        // mario.isAnimating = true;
        // mario.animate();
        history.go(0);
    }

    if(mario.y >= 640 && !mario.hitEnemy) {
        // mario.isAnimating = true;
        // mario.animate();
        mario.fAnimate();
    }

    if(keyIsDown(32) && jumpHeight >= 90) {
        if(jumpHeight >= 180 && !mario.isFalling) {
            mario.isFalling = true;
            mario.isJumping = false;
            mario.canJump = false;
        }
        // else if(jumpHeight == 0 && mario.isFalling) {
        //     mario.isFalling = false;
        // }
    }
    if(!keyIsDown(32) && jumpHeight >= 90) {
        mario.isFalling = true;
        mario.isJumping = false;
        mario.canJump = false;
    }
    


    enemies[6].stepLeft = true;
    enemies[7].stepLeft = true;
    if(!enemies[8].power && !enemies[8].shell) {
        enemies[8].stepLeft = true;
    }
    enemies[9].stepLeft = true;
    enemies[10].stepLeft = true;
    enemies[11].stepLeft = true;
    enemies[12].stepLeft = true;
    enemies[13].stepLeft = true;
    enemies[14].stepLeft = true;

    for(let i=6; i<15; i++) {
        //enemies[i].stepLeft = true;
        if(enemies[i].x < blocks[44].x+40) {
            enemies[i].y += 5;
        }
    }

    // if(!enemies[8].power && !enemies[8].shell) {
    //     enemies[8].stepLeft = true;
    // }
    // if(enemies[8].x-40 > blocks[44].x+40) {
    //     enemies[8].y += 5;
    // }

    // fill(0);
    // rect(blocks[44].x+40,440,40,40);
}


keyReleased = () => {
    if(keyCode == 39) {
        rightRegen = true;
    } 
    if(keyCode == 32) {
        if(mario.isJumping && jumpHeight > 90) {
            mario.canJump = true;
            mario.isFalling = true;
            mario.isJumping = false;
        }
    }
    else if(keyCode == 37) {
        leftRegen = true;
    }
}

function keyPressed() {
    if (keyCode === 32 && !mario.isJumping && !mario.isFalling) {
        ssmallJump.play();
        mario.isJumping = true;
    } 
}
