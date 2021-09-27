let _ = require('lodash');

console.log(' ');
let array = _.words("Bonjour, je m'appelle Maxime, j'ai 21 ans et j'étudie à Télécom Saint-Étienne");
for (let word of array) {
    console.log(word);
}