    var input = require('prompt-sync')()
    
    //Entrada

    var horas = Number(input('Digite a quantidade de horas: '))

    //Processamento

    var semanas = ((horas) - ( horas % 168 )) / 168
    var dias = parseInt((horas % 168) / 24)
    var restante_horas = horas % 24

    //Saída

    console.log(`${restante_horas} horas corresponde respectivamente a: `)
    
    console.log(`${semanas} semanas.`)
    console.log(`${dias} dias`)
    console.log(`e ${restante_horas} horas.`)