
const crypto = require('crypto');
const cleAleatoire = crypto.randomBytes(16);
console.log(`clé aleatoire generé : `, cleAleatoire.toString('hex'));