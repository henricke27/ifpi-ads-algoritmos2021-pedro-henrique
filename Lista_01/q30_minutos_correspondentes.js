    var input = require('prompt-sync')()

    //Entrada

    var minutos = Number(input('Digite a quantidade de minutos: '))

    //Processamento

    var dias = parseInt((minutos) / 1440)
    var horas = parseInt((minutos % 1440) / 60)
    var minutos = minutos % 60

    //Saída

    console.log(`${minutos} minutos corresponde respectivamente a: `)
    console.log(`${dias} dias`)
    console.log(`${horas} horas`)
    console.log(`${minutos} minutos`)