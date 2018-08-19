setup = () => {
    createCanvas(601,481);
    //initialise map
    for(let i=0; i<600/blockSize; i++) {
        for(let j=0; j<480/blockSize; j++) {
            map[i][j] = new Block(i*blockSize,j*blockSize,blockSize);
        }
    }
}

draw = () => {
    clear()
    background(200);
    for(let i=0; i<600/blockSize; i++) {
        for(let j=0; j<480/blockSize; j++) {
            map[i][j].show();
        }
    }
}

keyPressed = () => {
    
}



