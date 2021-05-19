   var input = require('prompt-sync')()

   //Entrada

   var numero = Number(input('Digite um número inteiro com 3 dígitos: '))

   //Processamento

   var centena = (numero / 100) - ( (numero % 100) / 100) 
   var dezena = ( (numero % 100) - (numero % 10) ) / 10
   var unidade = (numero % 10)

   var inverso = (centena) + (dezena * 10) + (unidade * 100)
   var soma = numero + inverso

   //Saída

   console.log(`O somatório de ${numero} e ${inverso} é: ${soma}`)