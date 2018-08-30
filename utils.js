// ------variables---------------
const blockSize = 40;
const gravity = 5;
let direction = 1;
let jumpDistance = 200;
let rememberDistance = 0;
let detectionChange = false;
let topDetect = 0;
let bottomDetect = 0;
let leftDetect = 0;
let rightDetect = 0;
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

// -- ground -- //
for(let i=0;i<40;i++){
        blocks.push(new Block(i*40,13*blockSize,blockSize,blockSize*2,'ground'));
}

// ------mario-------------------
mario = new Mario(11*blockSize,12*blockSize,blockSize,blockSize)