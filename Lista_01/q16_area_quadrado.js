    var input = require('prompt-sync')()
    
    //Entrada

    var lado_quadrado = Number(input('Digite o valor do lado do quadrado: '))

    //Processamento

    var area_quadrado = lado_quadrado ** 2 

    //Saída

    console.log(`A área do quadrado equivale a: ${area_quadrado}`)