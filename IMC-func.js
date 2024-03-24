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

 transforme em funções o código:
 */


function calcularImc(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function classificarImc (IMC){
  if(IMC < 18.5){
    return `Seu IMC é de ${IMC.toFixed(2)} e você está abaixo do seu peso ideal.`;
  } else if (IMC >= 18.5 && IMC <= 25) {
    return `Seu IMC é ${IMC.toFixed(2)} e você está no seu peso ideal.`;
  } else if (IMC >= 25 && IMC <= 30) {
    return `Seu IMC é ${IMC.toFixed(2)} e você está acima do peso`;
  } else if (IMC >= 30 && IMC <= 40) {
    return `seu IMC é ${IMC.toFixed(2)} e você está obeso`;
  } else {
    return `seu IMC é ${IMC.toFixed(2)} e você está em obesidade grave`;
  };
}

// Main sendo uma função auto invocada anonima
(function () {
  const peso = 80;
  const altura = 1.80;
  const IMC = calcularImc(peso, altura);
  console.log(classificarImc(IMC));
})();

