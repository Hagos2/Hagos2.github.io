"use strict";
function area(){
    return this.side*this.side;
}
const Square1={side:5};
const protoSquare={area:area};
Square1._proto_=protoSquare;

function Square(side){
    this.side=side;
}
Square.prototype=protoSquare;

class Square(){
    constructor(area){
        this.side=this.side;
    }
}
class Square2{
constructor(side){
    this.side=side;
}
}