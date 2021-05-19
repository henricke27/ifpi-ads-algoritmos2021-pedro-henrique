    var input = require('prompt-sync')()

    //Entrada

    var meses = Number(input('Digite a quantidade de meses: '))

    //Processamento

    var anos = ((meses) - (meses % 12)) / 12
    var restante_meses = meses % 12

    //Saída

    console.log(`${meses} meses corresponde a: ${anos} anos e ${restante_meses} meses.`)