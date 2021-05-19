    var input = require('prompt-sync')()
    var valor_dolar = 5.40   
    console.log(`O Dólar americano está valendo: R$${valor_dolar}`)

    //Entrada

    var dolar = Number(input('Digite o valor em Dólar: '))

    //Processamento

    var real = dolar * valor_dolar 

    //Saída

    console.log(`US$${dolar} é equivalente a: R$${real.toFixed(2)}`)
