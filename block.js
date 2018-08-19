function Block(x,y,s) {
    this.x = x;
    this.y = y;
    this.s = s;

    this.show = function() {
        stroke(0);
        fill(150);
        rect(this.x,this.y,this.s,this.s);
    }
}
