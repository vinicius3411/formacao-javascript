/* O IMC - Indice de massa corporal é um critério da OMS para dar uma indicação sobre a consição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
 - Abaixo de 18.5 Abaixo do peso;
 - Entre 18.5 e 25 peso normal;
 - Entre 25 e 30 Acima do peso;
 - Entre 30 e 40 Obeso;
 - Acima de 40 Obesidade Grave;
 */

 let altura = 0
 let peso = 0

 // função de leitura de terminal
const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// questões para colher as notas do terminal
rl.question(`Insira seu peso em Kg: `, peso => {
  rl.question(`Insira sua altura em metros: `, altura =>{

    // conversão de peso e altura em numero
    peso = parseFloat(peso);
    altura = parseFloat(altura);

    //calculo do IMC
    IMC = peso / (altura*altura);

    // Classificação de acordo com IMC
    
    if(IMC < 18.5){
      console.log(`Seu IMC é de ${IMC.toFixed(2)} e você está abaixo do seu peso ideal.`)
    } else if (IMC >= 18.5 && IMC <= 25) {
      console.log(`Seu IMC é ${IMC.toFixed(2)} e você está no seu peso ideal.`)
    } else if (IMC >= 25 && IMC <= 30) {
      console.log(`Seu IMC é ${IMC.toFixed(2)} e você está acima do peso`)
    } else if (IMC >= 30 && IMC <= 40) {
      console.log(`seu IMC é ${IMC.toFixed(2)} e você está obeso`)
    } else {
      console.log(`seu IMC é ${IMC.toFixed(2)} e você está em obesidade grave`)
    };
    rl.close();
  });
});