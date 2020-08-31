let read = require('readline');

let leit = read.createInterface({
  input: process.stdin,
  output: process.stdout,
});

leit.question('Digite os dois divisores, os separados com vírgulas: ', (ent) => {
    let aux = toArray(ent);

    console.log(`MDC = ${mdc(aux[0], aux[1])}`);
  }
);

const toArray = (str) => str.split(',').map((num) => parseInt(num));

const mdc = (num1, num2) => {
  let teto = num1 <= num2 ? num1 : num2;

  for (teto; teto >= 1; teto--) {
    let resto1 = num1 % teto;
    let resto2 = num2 % teto;

    if (resto1 === 0 && resto2 === 0) return teto;
  }
};