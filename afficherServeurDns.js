/*const dns = require('dns');
dns.getServers((err, serveursDns) => {
    if(err){
        console.error('erreur lors de la recuperation de serveurs dns : ', err);
        return;
    }
    console.log('serveurs dns configurés sur la machine :', serveursDns);
});*/

const dns = require('dns');
dns.resolve('www.facebook.com')