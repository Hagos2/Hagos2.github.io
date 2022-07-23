/*
Explain why do we want sometimes to use setImmediate instead of using setTimeout?
setTimeout runs in Timer phase, setImmediate runs in check phase.
 For example: If there's a case needs to run just before close phase, we can use setImmediate.

var fs = require('fs'); 
var path = require('path');

fs.readFile(path.join(__dirname, 'greet.txt'), 'utf8', function(err, data) { 
    setTimeout(() => { console.log('timeout'); }, 0);
 setImmediate(() => { console.log('immediate'); }); 
 process.nextTick(() => console.log('nexttick')); });

Explain the difference between process.nextTick and setImmediate?
callback of process.nextTick get executed multiple chances in one iteration - highest priotiry
how many callbacks will be executed in one iteration?
 process.nextTick() - all of callbacks in nextTick queue, drain out 
 - Don't use while true loop on process.nextTick setImmediate 
 - certain, the remaining for next iteration/tick
process.nextTick - API provided natively by Node.js setTimeout, setImmediate - provided by libuv
Name 10 global modules/methods available in Node environment.
Buffer
 console 
 exports
  global 
  module 
  process 
  require() 
  setImmediate()/clearImmediate() 
  setInterval()/clearInterval() 
  setTimeout()/clearTimeout() URL



*/