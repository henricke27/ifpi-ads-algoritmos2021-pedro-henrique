    var input = require('prompt-sync')()    
    
    //Entrada 

    var dias = Number(input('Digite a quantidade de dias: '))

    //Processamento

    var semanas = parseInt(dias / 7)
    var restante_dias = dias % 7

    //Saída

    console.log(`O número de dias corresponde respectivamente a: ${semanas} semanas e ${restante_dias} dias.`)