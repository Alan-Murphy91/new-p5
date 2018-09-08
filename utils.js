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
let eSideDetect = 0;
let mapOffset = 0;
let currentPos = 0;
let blocksRightOne = true;
let blocksRightOneN = 2000;
let blocksRightTwo = false;
let blocksRightTwoN = 2000;
let blocksRightThree = false;
let blocksRightThreeN = 2000;

// ------blocks------------------
blocks = [];

blocks.push(new Block(17*blockSize,9*blockSize,blockSize,blockSize,'block'));

blocks.push(new Block(21*blockSize,9*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(22*blockSize,9*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(23*blockSize,9*blockSize,blockSize,blockSize,'block'));
        blocks.push(new Block(23*blockSize,5*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(24*blockSize,9*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(25*blockSize,9*blockSize,blockSize,blockSize,'block'));

blocks.push(new Block(29*blockSize,11*blockSize,blockSize,blockSize,'pipe'));
blocks.push(new Block(30*blockSize,11*blockSize,blockSize,blockSize,'pipe'));
blocks.push(new Block(29*blockSize,12*blockSize,blockSize,blockSize,'pipe'));
blocks.push(new Block(30*blockSize,12*blockSize,blockSize,blockSize,'pipe'));

blocks.push(new Block(39*blockSize,11*blockSize,blockSize,blockSize,'pipe'));
blocks.push(new Block(39*blockSize,12*blockSize,blockSize,blockSize,'pipe'));
blocks.push(new Block(39*blockSize,10*blockSize,blockSize,blockSize,'pipe'));
blocks.push(new Block(40*blockSize,11*blockSize,blockSize,blockSize,'pipe'));
blocks.push(new Block(40*blockSize,12*blockSize,blockSize,blockSize,'pipe'));
blocks.push(new Block(40*blockSize,10*blockSize,blockSize,blockSize,'pipe'));

blocks.push(new Block(47*blockSize,11*blockSize,blockSize,blockSize,'pipe'));
blocks.push(new Block(47*blockSize,12*blockSize,blockSize,blockSize,'pipe'));
blocks.push(new Block(47*blockSize,10*blockSize,blockSize,blockSize,'pipe'));
blocks.push(new Block(47*blockSize,9*blockSize,blockSize,blockSize,'pipe'));
blocks.push(new Block(48*blockSize,11*blockSize,blockSize,blockSize,'pipe'));
blocks.push(new Block(48*blockSize,12*blockSize,blockSize,blockSize,'pipe'));
blocks.push(new Block(48*blockSize,10*blockSize,blockSize,blockSize,'pipe'));
blocks.push(new Block(48*blockSize,9*blockSize,blockSize,blockSize,'pipe'));

blocks.push(new Block(58*blockSize,11*blockSize,blockSize,blockSize,'pipe'));
blocks.push(new Block(58*blockSize,12*blockSize,blockSize,blockSize,'pipe'));
blocks.push(new Block(58*blockSize,10*blockSize,blockSize,blockSize,'pipe'));
blocks.push(new Block(58*blockSize,9*blockSize,blockSize,blockSize,'pipe'));
blocks.push(new Block(59*blockSize,11*blockSize,blockSize,blockSize,'pipe'));
blocks.push(new Block(59*blockSize,12*blockSize,blockSize,blockSize,'pipe'));
blocks.push(new Block(59*blockSize,10*blockSize,blockSize,blockSize,'pipe'));
blocks.push(new Block(59*blockSize,9*blockSize,blockSize,blockSize,'pipe'));

blocks.push(new Block(65*blockSize,8*blockSize,blockSize,blockSize,'block'));

blocks.push(new Block(78*blockSize,9*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(79*blockSize,9*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(80*blockSize,9*blockSize,blockSize,blockSize,'block'));

blocks.push(new Block(81*blockSize,4*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(82*blockSize,4*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(83*blockSize,4*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(84*blockSize,4*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(85*blockSize,4*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(86*blockSize,4*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(87*blockSize,4*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(88*blockSize,4*blockSize,blockSize,blockSize,'block'));




// -- ground -- //
for(let i=0;i<93;i++){
        if(i == 71 || i == 70 || i == 87 || i == 88 || i == 89) {
            continue;
        }
        else {
            blocks.push(new Block(i*40,13*blockSize,blockSize,blockSize*2,'ground'));
        }
}

// -- enemies - //
enemies = [];
//enemies.push(new Enemy(23*blockSize,12*blockSize,blockSize,blockSize,'goomba'));
// ------mario-------------------
mario = new Mario(11*blockSize,12*blockSize,blockSize,blockSize)

// ------functions---------------
