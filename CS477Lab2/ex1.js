const domainName = require('dns');
domainName.resolve4('www.miu.ed', (err, IPAddress) => {
    if (err) throw new Error('Invalid domain name');
    console.log(IPAddress);
});