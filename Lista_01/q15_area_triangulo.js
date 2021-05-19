    var input = require('prompt-sync')()

    //Entrada

    var base = Number(input('Informe o valor da base do triângulo: '))
    var altura = Number(input('Informe a altura do triângulo: '))

    //Processamento

    var area = (base * altura) / 2

    //Saída 

    console.log(`A área do triângulo corresponde a: ${area.toFixed(1)}`)