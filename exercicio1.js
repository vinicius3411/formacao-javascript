/*
1 - Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcula e imprima a sua média e a sua classificação conforme tabela abaixo.

Média  = (nota1 + nota2 + nota3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/
//variaveis das três notas
let nota1 = 0;
let nota2 = 0;
let nota3 = 0;

//função de leitura de terminal
const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//questões para colher as notas do terminal
rl.question(`Insira a primeira nota: `, nota1 => {
  rl.question(`Insira a segunda nota: `, nota2 => {
    rl.question(`Insira a terceira nota: `, nota3 =>  {

      //conversão de notas para numeros com virgula
      nota1 = parseFloat(nota1);
      nota2 = parseFloat(nota2);
      nota3 = parseFloat(nota3);

      //constante do calculo da média
      const media = (nota1 + nota2 + nota3) / 3;
//processo de if para classificação das notas
  if (media > 7){
    console.log(`Sua média foi ${media} e você passou de semestre!`)
  } else if (media >= 5 && media <= 7) {
    console.log(`Sua média foi ${media} e você está de recuperação!`)
  } else {
    console.log(`Sua média foi ${media} e você está reprovado`)
  }
  rl.close();
})
})
});