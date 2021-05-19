    var input = require('prompt-sync')()

    //Entrada

    var numero_1 = Number(input('Digite o primeiro número: '))
    var numero_2 = Number(input('Digite o segunro número: '))
    
    //Processamento

    var soma = (numero_1) + (numero_2)
    var diferença = (numero_1) - (numero_2)

    var divisão = (soma) / (diferença)

    //Saída

    console.log(`A divisão da soma pela diferença entre esses númeris é igual a: ${divisão.toFixed(2)}`)