    var input = require('prompt-sync')()
    
    //Entrada

    var quilometro = Number(input('Digite o valor em quilometros(Km): '))

    //Processamento

    var metro = quilometro * 1000

    //Saída

    console.log(`A distância de ${quilometro}km equivale a: ${metro}m`)