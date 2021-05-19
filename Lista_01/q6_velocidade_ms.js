    var input = require('prompt-sync')()

    //Entrada

    var velocidade_km = Number(input('Digite a velocidade (Km/h): '))

    //Processamento

    var velocidade_ms = velocidade_km / 3.6
    
    //saída

    console.log(`A velocidade em (m/s) é: ${velocidade_ms.toFixed(2)}`)