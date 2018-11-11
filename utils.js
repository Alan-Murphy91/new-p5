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
let eTopDetect = 0;
let eSideDetect = 0;
let mapOffset = 0;
let currentPos = 0;
let jumpHeight = 0;

let rightRegen = false;
let leftRegen = false;
let slide = 0;

let img = goomba1 = goomba2 = goomba3 = ground = question = solid = block = brick = mushroom = pipeg4 = koopaleft = kooparight = shell = block80 = block120 = block160 = marioright = marioleft = '';

// ------blocks------------------
blocks = [];

blocks.push(new Block(17*blockSize,9*blockSize,blockSize,blockSize,'block',true));

blocks.push(new Block(21*blockSize,9*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(22*blockSize,9*blockSize,blockSize,blockSize,'block',false,true));
blocks.push(new Block(23*blockSize,9*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(23*blockSize,5*blockSize,blockSize,blockSize,'block',true));
blocks.push(new Block(24*blockSize,9*blockSize,blockSize,blockSize,'block',true));
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
blocks.push(new Block(47*blockSize,9*blockSize,blockSize,blockSize,'pipe')); //20
blocks.push(new Block(48*blockSize,11*blockSize,blockSize,blockSize,'pipe'));
blocks.push(new Block(48*blockSize,12*blockSize,blockSize,blockSize,'pipe'));
blocks.push(new Block(48*blockSize,10*blockSize,blockSize,blockSize,'pipe'));
blocks.push(new Block(48*blockSize,9*blockSize,blockSize,blockSize,'pipe'));

blocks.push(new Block(58*blockSize,11*blockSize,blockSize,blockSize,'pipe'));
blocks.push(new Block(58*blockSize,12*blockSize,blockSize,blockSize,'pipe'));
blocks.push(new Block(58*blockSize,10*blockSize,blockSize,blockSize,'pipe'));
blocks.push(new Block(58*blockSize,9*blockSize,blockSize,blockSize,'pipe')); //28
blocks.push(new Block(59*blockSize,11*blockSize,blockSize,blockSize,'pipe'));
blocks.push(new Block(59*blockSize,12*blockSize,blockSize,blockSize,'pipe'));
blocks.push(new Block(59*blockSize,10*blockSize,blockSize,blockSize,'pipe'));
blocks.push(new Block(59*blockSize,9*blockSize,blockSize,blockSize,'pipe'));

blocks.push(new Block(65*blockSize,8*blockSize,blockSize,blockSize,'block'));

blocks.push(new Block(78*blockSize,9*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(79*blockSize,9*blockSize,blockSize,blockSize,'block',false,true));
blocks.push(new Block(80*blockSize,9*blockSize,blockSize,blockSize,'block'));

blocks.push(new Block(81*blockSize,5*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(82*blockSize,5*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(83*blockSize,5*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(84*blockSize,5*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(85*blockSize,5*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(86*blockSize,5*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(87*blockSize,5*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(88*blockSize,5*blockSize,blockSize,blockSize,'block'));

blocks.push(new Block(92*blockSize,5*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(93*blockSize,5*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(94*blockSize,5*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(95*blockSize,5*blockSize,blockSize,blockSize,'block'));

blocks.push(new Block(95*blockSize,9*blockSize,blockSize,blockSize,'block'));

blocks.push(new Block(101*blockSize,9*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(102*blockSize,9*blockSize,blockSize,blockSize,'block'));

blocks.push(new Block(106*blockSize,9*blockSize,blockSize,blockSize,'block',true));

blocks.push(new Block(109*blockSize,9*blockSize,blockSize,blockSize,'block',true));
blocks.push(new Block(109*blockSize,5*blockSize,blockSize,blockSize,'block',true));

blocks.push(new Block(112*blockSize,9*blockSize,blockSize,blockSize,'block',true));

blocks.push(new Block(118*blockSize,9*blockSize,blockSize,blockSize,'block'));

blocks.push(new Block(121*blockSize,5*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(122*blockSize,5*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(123*blockSize,5*blockSize,blockSize,blockSize,'block'));

blocks.push(new Block(128*blockSize,5*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(129*blockSize,5*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(130*blockSize,5*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(131*blockSize,5*blockSize,blockSize,blockSize,'block'));

blocks.push(new Block(129*blockSize,9*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(130*blockSize,9*blockSize,blockSize,blockSize,'block'));

blocks.push(new Block(134*blockSize,12*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(135*blockSize,12*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(136*blockSize,12*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(137*blockSize,12*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(135*blockSize,11*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(136*blockSize,11*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(137*blockSize,11*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(136*blockSize,10*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(137*blockSize,10*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(137*blockSize,9*blockSize,blockSize,blockSize,'brick'));

blocks.push(new Block(140*blockSize,12*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(141*blockSize,12*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(142*blockSize,12*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(143*blockSize,12*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(140*blockSize,11*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(141*blockSize,11*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(142*blockSize,11*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(140*blockSize,10*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(141*blockSize,10*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(140*blockSize,9*blockSize,blockSize,blockSize,'brick'));

blocks.push(new Block(148*blockSize,12*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(149*blockSize,12*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(150*blockSize,12*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(151*blockSize,12*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(152*blockSize,12*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(149*blockSize,11*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(150*blockSize,11*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(151*blockSize,11*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(152*blockSize,11*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(150*blockSize,10*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(151*blockSize,10*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(152*blockSize,10*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(151*blockSize,9*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(152*blockSize,9*blockSize,blockSize,blockSize,'brick'));

blocks.push(new Block(155*blockSize,12*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(156*blockSize,12*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(157*blockSize,12*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(158*blockSize,12*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(155*blockSize,11*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(156*blockSize,11*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(157*blockSize,11*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(155*blockSize,10*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(156*blockSize,10*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(155*blockSize,9*blockSize,blockSize,blockSize,'brick'));

blocks.push(new Block(163*blockSize,12*blockSize,blockSize,blockSize,'pipe'));
blocks.push(new Block(163*blockSize,11*blockSize,blockSize,blockSize,'pipe')); //111
blocks.push(new Block(164*blockSize,12*blockSize,blockSize,blockSize,'pipe'));
blocks.push(new Block(164*blockSize,11*blockSize,blockSize,blockSize,'pipe'));

blocks.push(new Block(168*blockSize,9*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(169*blockSize,9*blockSize,blockSize,blockSize,'block'));
blocks.push(new Block(170*blockSize,9*blockSize,blockSize,blockSize,'block',true));
blocks.push(new Block(171*blockSize,9*blockSize,blockSize,blockSize,'block'));

blocks.push(new Block(179*blockSize,12*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(179*blockSize,11*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(180*blockSize,12*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(180*blockSize,11*blockSize,blockSize,blockSize,'brick'));

blocks.push(new Block(181*blockSize,12*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(182*blockSize,12*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(183*blockSize,12*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(184*blockSize,12*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(185*blockSize,12*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(186*blockSize,12*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(187*blockSize,12*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(188*blockSize,12*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(189*blockSize,12*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(182*blockSize,11*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(183*blockSize,11*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(184*blockSize,11*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(185*blockSize,11*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(186*blockSize,11*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(187*blockSize,11*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(188*blockSize,11*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(189*blockSize,11*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(183*blockSize,10*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(184*blockSize,10*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(185*blockSize,10*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(186*blockSize,10*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(187*blockSize,10*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(188*blockSize,10*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(189*blockSize,10*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(184*blockSize,9*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(185*blockSize,9*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(186*blockSize,9*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(187*blockSize,9*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(188*blockSize,9*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(189*blockSize,9*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(185*blockSize,8*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(186*blockSize,8*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(187*blockSize,8*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(188*blockSize,8*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(189*blockSize,8*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(186*blockSize,7*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(187*blockSize,7*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(188*blockSize,7*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(189*blockSize,7*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(187*blockSize,6*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(188*blockSize,6*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(189*blockSize,6*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(188*blockSize,5*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(189*blockSize,5*blockSize,blockSize,blockSize,'brick'));
blocks.push(new Block(189*blockSize,5*blockSize,blockSize,blockSize,'brick'));

blocks.push(new Block(198*blockSize,12*blockSize,blockSize,blockSize,'brick'));






// -- ground -- //
for(let i=0;i<204;i++){
        if(i == 71 || i == 70 || i == 87 || i == 88 || i == 89 || i == 153 || i == 154) {
            continue;
        }
        else {
            blocks.push(new Block(i*40,13*blockSize,blockSize,blockSize*2,'ground'));
        }
}

// -- enemies - //
enemies = [];
enemies.push(new Enemy(23*blockSize,12*blockSize,blockSize,blockSize,'goomba'));
enemies.push(new Enemy(43*blockSize,12*blockSize,blockSize,blockSize,'goomba'));
enemies.push(new Enemy(51*blockSize,12*blockSize,blockSize,blockSize,'goomba'));
enemies.push(new Enemy(54*blockSize,12*blockSize,blockSize,blockSize,'goomba'));
enemies.push(new Enemy(81*blockSize,4*blockSize,blockSize,blockSize,'goomba'));
enemies.push(new Enemy(83*blockSize,4*blockSize,blockSize,blockSize,'goomba'));
enemies.push(new Enemy(100*blockSize,12*blockSize,blockSize,blockSize,'goomba'));
enemies.push(new Enemy(101*blockSize,12*blockSize,blockSize,blockSize,'goomba'));
enemies.push(new Enemy(108*blockSize,12*blockSize,blockSize,blockSize,'koopatroopa'));
enemies.push(new Enemy(115*blockSize,12*blockSize,blockSize,blockSize,'goomba'));
enemies.push(new Enemy(116*blockSize,12*blockSize,blockSize,blockSize,'goomba'));

enemies.push(new Enemy(124*blockSize,12*blockSize,blockSize,blockSize,'goomba'));
enemies.push(new Enemy(126*blockSize,12*blockSize,blockSize,blockSize,'goomba'));
enemies.push(new Enemy(128*blockSize,12*blockSize,blockSize,blockSize,'goomba'));
enemies.push(new Enemy(130*blockSize,12*blockSize,blockSize,blockSize,'goomba'));
//enemies.push(new Enemy(164*blockSize,12*blockSize,blockSize,blockSize,'goomba'));
enemies.push(new Enemy(171*blockSize,12*blockSize,blockSize,blockSize,'goomba'));
// ------mario-------------------
let mario = new Mario(11*blockSize,12*blockSize,blockSize,blockSize)

// ------functions---------------
