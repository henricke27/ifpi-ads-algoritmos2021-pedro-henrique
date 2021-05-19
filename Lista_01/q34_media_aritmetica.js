    var input = require('prompt-sync')()

    //Entrada

    var numero_1 = Number(input('Informe o primeiro número: '))
    var numero_2 = Number(input('Informe o segundo número: '))
    var numero_3 = Number(input('Informe o terceiro número: '))

    //Processamento

    var media = (numero_1 + numero_2 + numero_3) / 3
    
    //Saída 

    console.log(`A média aritmética entre esses números é: ${media.toFixed(2)}`)
    
