    var input = require('prompt-sync')()

    //Entrada

    var numero = Number(input('Informe um número com 4 dígitos: '))

    //Processamento

    var milhar = ( (numero) - (numero % 1000) ) / 1000 
    var centena = ( (numero % 1000) - (numero % 100) ) / 100
    var dezena = ( (numero % 100) - (numero % 10) ) / 10
    var unidade = numero % 10

    var soma = (milhar) + (centena) + (dezena) + (unidade)

    //Saída

    console.log(`O somatório entre os elementos do número informado é: ${soma}`)