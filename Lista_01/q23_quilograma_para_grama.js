    var input = require('prompt-sync')()
    
    //Entrada

    var quilograma = Number(input('Digite o valor da massa em quilograma(kg): '))

    //Processamento

    var grama = quilograma * 1000

    //Saída

    console.log(`A massa de ${quilograma}kg equivale a: ${grama}g`)