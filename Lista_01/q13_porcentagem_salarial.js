    var input_real = require('prompt-sync')()

    //Entrada

    var real = Number(input_real('Digite o valor monetário R$: '))

    //Processamento

    var valor_porcentagem = real * 0.7

    //Saída

    console.log(`70% do valor atribuído corresponde a: R$${valor_porcentagem.toFixed(2)}`)