    var input = require('prompt-sync')()

    //Entrada

    var valor_binario = Number(input('Informe um número binario com 4 dígitos: '))

    //Processamento


    var posicao_3 = (valor_binario / 1000) - ((valor_binario % 1000) / 1000)
    var posicao_2 = ((valor_binario % 1000) / 100) - ((valor_binario % 100) / 100) 
    var posicao_1 = ((valor_binario % 100) / 10) - ((valor_binario % 10) / 10 ) 
    var posicao_0 = (valor_binario % 10)

    var valor_decimal = (posicao_3 * 8) + (posicao_2 * 4) + (posicao_1 * 2) + (posicao_0 * 1)

    //Saída

    console.log(`O número ${valor_binario} em binário equivale no sistema decimal a: ${valor_decimal}`)

    
