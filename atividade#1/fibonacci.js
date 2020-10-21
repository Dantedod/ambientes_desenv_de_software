let read = require('readline');

let leit = read.createInterface({
  input: process.stdin,
  output: process.stdout,
});

leit.question('quant de numeros da sequência: ', (ent) => {
  console.log(fibonnaci(parseInt(ent)));
});

const fibonnaci = (quant) => {
  let nAnt = 0;
  let nAtual = 1;
  let proxNum;
  let saida = '';

  if (quant === 1) saida = nAnt;

  if (quant === 2) saida = `${nAnt} ${nAtual}`;

  if (quant > 2) {
    saida = `${nAnt} ${nAtual} `;

    for (let i = 2; i < quant; i++) {
      proxNum = nAnt + nAtual;
      nAnt = nAtual;
      nAtual = proxNum;

      saida += `${nAtual} `;
    }
  }

  return saida;
};