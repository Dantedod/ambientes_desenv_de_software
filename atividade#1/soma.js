let read = require('readline');

let leitor = read.createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question('Digite alguns numeros, e o separe com virgulas ', (ent) => {
  let aux = toArray(ent).reduce((soma, elemento) => (soma += elemento));

  console.log(aux);
});

const toArray = (str) => str.split(',').map((num) => parseFloat(num));