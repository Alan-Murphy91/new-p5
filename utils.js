// ------variables---------------
const blockSize = 40;
const gravity = 5;
let direction = 1;
// ------functions---------------

// ------console-----------------


// ------blocks------------------
blocks = []
blocks.push(new Block(17*blockSize,9*blockSize,blockSize,blockSize,'block'));

blocks.push(new Block(21*blockSize,9*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(22*blockSize,9*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(23*blockSize,9*blockSize,blockSize,blockSize,'block'));
        blocks.push(new Block(23*blockSize,5*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(24*blockSize,9*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(25*blockSize,9*blockSize,blockSize,blockSize,'block'));

ground = []
ground.push(new Block(0,13*blockSize,blockSize*30,blockSize*2,'ground'));

// ------mario-------------------
mario = new Mario(11*blockSize,12*blockSize,blockSize,blockSize)