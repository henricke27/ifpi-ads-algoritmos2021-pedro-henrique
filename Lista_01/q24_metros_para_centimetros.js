    var input = require('prompt-sync')()
   
    //Entrada

    var metro = Number(input('Digite a distância em metros: '))

    //Processamento

    var centimetro = metro * 100
    
    //Saída

    console.log(`A distância de ${metro}m equivale a: ${centimetro}cm`)