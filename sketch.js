setup = () => {
    createCanvas(960,600);
    //initialise map

}

draw = () => {
    clear()
    background(200);
    for(let x=0; x<blocks.length; x++) {
        blocks[x].show();
        if(keyIsDown(RIGHT_ARROW)) {
            blocks[x].goLeft();
        }
        if(keyIsDown(LEFT_ARROW)) {
            blocks[x].goRight();
        }
    }
    for(let x=0; x<ground.length; x++) {
        ground[x].show();
    }
}

keyPressed = () => {


}



