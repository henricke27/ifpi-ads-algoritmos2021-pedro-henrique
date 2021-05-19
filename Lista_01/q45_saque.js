    var input = require('prompt-sync')()
   
    console.log('O limite de saque é de R$999,00')
    console.log('Os valores que podem ser aplicados ao saque são: R$100, R$50, R$10, R$5 e R$1')

    //Entrada

    var saque = Number(input('Informe o valor que será sacado: '))

    //Processamento

    var nota_100 = parseInt(saque / 100)
    var nota_50 = parseInt((saque % 100) / 50)
    var nota_10 = parseInt((saque % 50) / 10)
    var nota_05 = parseInt((saque % 10) / 5)
    var moeda_01 = parseInt((saque % 5))

    //Saída

    console.log(`As notas que serão entregues de acordo com a solicitação do saque são:`)
    console.log(`${nota_100} notas de R$100`)
    console.log(`${nota_50} notas de R$50`)
    console.log(`${nota_10} notas de R$10`)
    console.log(`${nota_05} notas de R$5`)
    console.log(`${moeda_01} moedas de R$1`)

