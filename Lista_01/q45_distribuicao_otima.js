    var input = require('prompt-sync')()

    console.log('Valores disponíveis: R$100, R$50, R$10, R$5 e R$1')
    console.log('O limite de saque é: R$999.00')

    //Entrada

    var quantia_solicitada = Number(input('Informe o valor do saque: '))

    //Processamento e 

    if (quantia_solicitada >= 100 && quantia_solicitada % 100 >= 50 && quantia_solicitada % 100 <= 99 && quantia_solicitada % 10 >= 5 && quantia_solicitada % 10 <= 9 ){
        var receber_50 = 1
        var receber_5 = 1

        var receber_100 = parseInt(quantia_solicitada / 100 )
        var receber_10 = parseInt(((quantia_solicitada % 100) - 50) / 10)  
        var receber_1 = (quantia_solicitada % 10) - 5
        
    }

    if (quantia_solicitada >= 100 && quantia_solicitada % 100 >= 50 && quantia_solicitada % 100 <= 99 && quantia_solicitada % 10 < 5) {
        var receber_50 = 1
        var receber_5 = 0
        
        var receber_100 = parseInt(quantia_solicitada / 100 )
        var receber_10 = parseInt(((quantia_solicitada % 100) - 50) / 10)  
        var receber_1 = quantia_solicitada % 10

    } 

    if (quantia_solicitada >= 100 && quantia_solicitada % 100 < 50 && quantia_solicitada % 10 >= 5 && quantia_solicitada % 10 <= 9) {
        var receber_50 = 0
        var receber_5 = 1

        var receber_100 = parseInt(quantia_solicitada / 100 )
        var receber_10 = parseInt((quantia_solicitada % 100) / 10)  
        var receber_1 = (quantia_solicitada % 10) - 5

    }
    
    if (quantia_solicitada >= 100 && quantia_solicitada % 100 < 50 && quantia_solicitada % 10 < 5) {
        var receber_50 = 0
        var receber_5 = 0

        var receber_100 = parseInt(quantia_solicitada / 100 )
        var receber_10 = parseInt((quantia_solicitada % 100) / 10)  
        var receber_1 = quantia_solicitada % 10

    }

    if (quantia_solicitada < 100 && quantia_solicitada >= 50 && quantia_solicitada % 10 >= 5 && quantia_solicitada % 10 <= 9){
        var receber_50 = 1
        var receber_5 = 1

        var receber_100 = parseInt(quantia_solicitada / 100 )
        var receber_10 = parseInt(((quantia_solicitada % 100) - 50) / 10)  
        var receber_1 = (quantia_solicitada % 10) - 5 

    }

    if (quantia_solicitada < 100 && quantia_solicitada >= 50 && quantia_solicitada % 10 < 5){
        var receber_50 = 1
        var receber_5 = 0

        var receber_100 = parseInt(quantia_solicitada / 100 )
        var receber_10 = parseInt(((quantia_solicitada % 100) - 50) / 10)  
        var receber_1 = quantia_solicitada % 10

    }

    if (quantia_solicitada < 100 && quantia_solicitada < 50 && quantia_solicitada % 10 >= 5 && quantia_solicitada % 10 <= 9){
        var receber_50 = 0
        var receber_5 = 1

        var receber_100 = parseInt(quantia_solicitada / 100 )
        var receber_10 = parseInt((quantia_solicitada % 100) / 10)  
        var receber_1 = (quantia_solicitada % 10) - 5

    }

    if (quantia_solicitada < 100 && quantia_solicitada < 50 && quantia_solicitada % 10 < 5 ){
        var receber_50 = 0
        var receber_5 = 0

        var receber_100 = parseInt(quantia_solicitada / 100 )
        var receber_10 = parseInt((quantia_solicitada % 100) / 10)  
        var receber_1 = quantia_solicitada % 10

    }

    //Saída

    console.log(`Os valores entregues ao cliente será: ${receber_100} notas de R$100, ${receber_50} nota de R$50, ${receber_10} notas de R$10, ${receber_5} nota de R$5 e ${receber_1} moedas de R$1`)
    