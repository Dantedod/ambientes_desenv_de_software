let read = require('readline');

let leit = read.createInterface({
  input: process.stdin,
  output: process.stdout,
});

leit.question('Digite um número: ', (ent) => {
  let n = parseInt(ent);
  console.log(ePrimo(n) === true ? 'É um numero primo' : 'Não é um numero primo');
});

const ePrimo = (n) => {
  for(let i = 2; i < n; i++) {
    let aux = n % i;

    if(aux === 0) return false;
  }
  
  return n > 1;
};