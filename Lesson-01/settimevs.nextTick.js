setTimeout(()=>{console.log('timeout');},0);//second
setImmediate(()=>{ console.log('immediate');});// last
process.nextTick(()=>console.log('nextTick'));//first