    var input = require('prompt-sync')()

    //Entrada

    var base = Number(input('Informe o valor da base do retângulo: '))
    var altura = Number(input('Informe o valor da altura do retângulo: '))

    //Processamento 

    var area_retangulo = base * altura 

    //Saída

    console.log(`A área do retângulo equivale a: ${area_retangulo}`)