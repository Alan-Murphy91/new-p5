// ------variables---------------
const blockSize = 40;
const mapSizeX = 8960/blockSize;
const mapSizeY = 480/blockSize;
const map = make2DGrid(mapSizeX,mapSizeY);
// ------functions---------------
function make2DGrid(wid,hei) {
    const arr = new Array(wid);
    for(let i=0; i<arr.length; i++) {
        arr[i] = new Array(hei);
    }
    return arr;
}
// ------console----------------
console.log('Map array ', map);