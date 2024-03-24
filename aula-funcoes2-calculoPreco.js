/*
Elabora um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado.

Código Condição de Pagamento:
- À vista Débito, recebe 10% de desconto;
- À visto no dinheiro ou pix, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%
*/

function pagarAVistaDebito (precoEtiqueta) {
  return precoEtiqueta - (precoEtiqueta * 0.10).toFixed(2);
}

function pagarPixDinheiro (precoEtiqueta) {
  return precoEtiqueta - (precoEtiqueta * 0.15).toFixed(2);
}

function pagarEmDuas (precoEtiqueta) {
  return precoEtiqueta.toFixed(2);
}

function pagarEmMais (precoEtiqueta) {
  return precoEtiqueta + (precoEtiqueta * 0.10).toFixed(2);
}

function main (formaDePagamento, precoEtiqueta){

  if (formaDePagamento === 1) {
    console.log(`O valor do produto será: R$ ${pagarAVistaDebito(precoEtiqueta)}`);
  } else if (formaDePagamento === 2) {
    console.log(`O valor do produto será: R$ ${pagarPixDinheiro(precoEtiqueta)}`);
  } else if (formaDePagamento === 3) {
    console.log(`O valor total do produto será: R$ ${pagarEmDuas(precoEtiqueta)}`);
  } else if (formaDePagamento === 4) {
    console.log(`o valor da parcela será R$ ${pagarEmMais(precoEtiqueta)}`);
  }
}

main(1 , 500.55)