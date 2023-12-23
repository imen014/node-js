const texte = "hello, buffer !";
const monBuffer = Buffer.from(texte);
console.log("buffer crée : ", monBuffer);
console.log('Contenu du Buffer en tant que chaîne :', monBuffer.toString());