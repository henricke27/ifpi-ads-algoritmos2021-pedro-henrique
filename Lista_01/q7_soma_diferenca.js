    var input = require('prompt-sync')()

    //Entrada

    var numero_1 = Number(input('Digite o primeiro número: '))
    var numero_2 = Number(input('Digite o segundo número: '))
    var numero_3 = Number(input('Digite o terceiro número: '))

    //Processamento

    var soma = (numero_1) + (numero_2)
    var diferença = (numero_2) - (numero_3)

    //Saída

    console.log(`A soma entre os dois primeiros números é: ${soma}.`)
    console.log(`A diferença entre os dois últimos números é: ${diferença}.`)

