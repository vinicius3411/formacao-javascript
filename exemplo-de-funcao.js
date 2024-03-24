// Função para calculo de acrescimo de juros 

function incrementarJuros(valor, percentualJuros) {
  const valorDeAcrescimo = (percentualJuros / 100) = valor;
  return valor + valorDeAcrescimo;
}

/* 
no console são inseridos os parametros da função e então ela já é calculada
automaticamente
*/
console.log(incrementarJuros(100, 10));