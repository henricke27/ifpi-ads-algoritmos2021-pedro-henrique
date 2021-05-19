    var input = require('prompt-sync')()

    //Entrada

    var numero_A = Number(input('Digite o primeiro número: '))
    var numero_B = Number(input('Digite o segundo número: '))
    var numero_C = Number(input('Digite o terceiro número: '))

    //Processamento

    var formula_R = (numero_A + numero_B) ** 2
    var formula_S = (numero_B + numero_C) ** 2

    var formula_D = (formula_R + formula_S) / 2

    //Saída 

    console.log(`O resultado da expressão é: ${formula_D}`)