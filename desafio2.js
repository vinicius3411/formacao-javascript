/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variaveis. Sendo elas:
1 - Preço da gasolina;
2 - Preço do etanol;
3 - Gasto médio de combustivel do carro por KM;
4 - O tipo de combustivel que está no carro;
5 - Distancia em KM da viagem;
*/

const precoGasolina = 4.99;
const precoEtanol = 3.40;
const consumoCombustivel = 8;
const distKM = 250;
let combustivel = ""

const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(`Qual o combustivel do carro? `, combustivel => {

  if (combustivel === 'etanol') {
      console.log(((distKM / consumoCombustivel) * precoEtanol).toFixed(2))
  } else {
      console.log(((distKM / consumoCombustivel) * precoGasolina).toFixed(2))
  };
  rl.close();
});
