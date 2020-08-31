let read = require('readline');

let leit = read.createInterface({
  input: process.stdin,
  output: process.stdout,
});

leit.question('Digite seus numeros separados por vírgulas: ', (ent) => {
  let aux = toArray(ent).reduce((soma, element) => (soma += element));

  console.log(aux);
});

const toArray = (str) => str.split(',').map((num) => parseFloat(num));