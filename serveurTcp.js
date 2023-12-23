const net = require('net');
const serveurTcp = net.createServer((socket) => {
    console.log("nouvelle connexion ! ");
    socket.on('data', (donnees) => {
        console.log(`données reçues du client : ${donnees}`);
    });

    socket.on('end', () => {
        console.log('connexion terminée !');
    });
});

const PORT = 3000;
serveurTcp.listen(PORT, () => {
    console.log(`Serveur TCP en cours d'exécution sur le port ${PORT}`);
});