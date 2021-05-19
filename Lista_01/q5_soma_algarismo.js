var input = require('prompt-sync')()

//Entrada

var numero = Number(input('Digite um número inteiro com 3 dígitos: '))

//Processamento

    //Primeiro cria-se uma fórmula para obter os valores de cada casa numérica:

var retirar_unidade = (numero) % 10
var retirar_dezena = (numero) - (numero % 100)
var retirar_centena = (numero) - (numero - numero % 100)

    //Depois aplica-se as fórmulas de maneira coerente a finalidade desejada.

var valor_centena = retirar_dezena / 100
var valor_dezena = ((retirar_centena) - (retirar_unidade)) / 10
var valor_unidade = retirar_unidade

    //Por fim, junta-se todos os valores obtidos por cada variável.

var soma = (valor_centena + valor_dezena + valor_unidade)

//Saída

console.log(`A soma entre os elementos do número ${numero} é: ${soma}`)