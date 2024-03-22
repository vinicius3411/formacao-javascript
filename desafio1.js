/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variaveis. Sendo elas:
1 - Preço do combustivel;
2 - Gasto médio de combustivel do carro por KM;
3 - Distancia em KM da viagem;
*/

const precoCombustivel = 4.99;
const kmPorLitro = 8;
const distKM = 250;

const valorViagem = (distKM / kmPorLitro) * precoCombustivel;

console.log(valorViagem.toFixed(2));