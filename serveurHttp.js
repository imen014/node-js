const http = require('http');
const serveur = http.createServer((req, res) => {
    res.writeHead(200, {'content-type':'text/plain'});
    res.end('hello, world! \n');
});

const PORT = 3000;
serveur.listen(PORT, () => {
    console.log(`Serveur HTTP en cours d'exécution sur http://localhost:${PORT}/`);

});