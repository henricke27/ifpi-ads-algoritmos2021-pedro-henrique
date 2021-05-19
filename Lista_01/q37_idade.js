    var input = require('prompt-sync')()

    //Entrada

    var idade_em_dias = Number(input('Informe a sua idade em dias: '))

    //Processamento

    var anos = parseInt(idade_em_dias / 365)
    var meses = parseInt((idade_em_dias % 365) / 30)
    var dias = idade_em_dias % 10

    //Saída

    console.log(`A idade informada em dias corresponde a: ${anos} anos, ${meses} meses e ${dias} dias.}`)