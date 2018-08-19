setup = () => {
    createCanvas(8960,680);
    //initialise map

}

draw = () => {
    clear()
    background(200);
    for(let x=0; x<Blocks.length; x++) {
        Blocks[x].show();
    }
    if(keyIsDown(LEFT_ARROW)) {
        console.log('gh');
    }
}

keyPressed = () => {


}



