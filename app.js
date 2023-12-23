const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('hello, express');

});
const port = 3000;
app.listen(port, () => {
    console.log(`Le serveur est en cours d'exécution sur http://localhost:${port}`);

});