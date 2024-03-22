/*
Elabora um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado.

Código Condição de Pagamento:
- À vista Débito, recebe 10% de desconto;
- À visto no dinheiro ou pix, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%
*/

//variaveis iniciais
let precoProduto = 0
let formaDePagamento = 0
let numeroParcelas = 0

 // função de leitura de terminal
 const readline = require('node:readline');
 const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
 });
 // questões para colher os valores no terminal
 rl.question(`Digite o valor do produto: `, precoProduto =>{

   rl.question(`\nescolha a forma de pagamento digitando apenas o numero da forma desejada: 
   1 - À vista Débito, recebe 10% de desconto
   2 - À visto no dinheiro ou pix, recebe 15% de desconto
   3 - Parcelado em duas vezes, preço normal de etiqueta sem juros
   4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%: \n`, formaDePagamento => {
     //conversão dos valores colhidos para numericos
     formaDePagamento = parseInt(formaDePagamento)
     precoProduto = parseFloat(precoProduto)
    //formulas para calcular o valor dos produtos
     const aVista = precoProduto - (precoProduto * 0.10);
     const dinheiroPix = precoProduto - (precoProduto * 0.15);
     const duasVezes = precoProduto / 2;
     
     //função if para resposta da escolha de pagamento
     if(formaDePagamento === 1){
       console.log(`Forma de pagamento escolhida foi à vista no débito. Valor total = R$ ${aVista}`)
      } else if (formaDePagamento === 2){
        console.log(`Forma de pagamento escolhida foi dinheiro ou pix valor total da compra = R$ ${dinheiroPix}`)
      }else if (formaDePagamento === 3){
        console.log(`forma de pagamento escolhida foi parcelado em duas vezes sem juros, valor de cada parcela = R$ ${duasVezes} com valor total = R$ ${duasVezes*2}`)
      }else if (formaDePagamento === 4){
        
        //função para colher o numero de parcelas
        rl.question(`insira o numero de parcelas desejado: `, numeroParcelas => {
          
          //formula para o valor do parcelamento
          const parcelamento = (precoProduto + (precoProduto * 0.10)) / numeroParcelas;
          
          //resposta do parcelamento
          console.log(`\nA forma de pagamento escolhida foi parcelado em ${numeroParcelas} vezes, o valor de cada parcela será R$ ${parcelamento.toFixed(2)}, com valor total = R$ ${(parcelamento*numeroParcelas).toFixed(2)}`)
                   
          rl.close();
        })
      }
    })
});