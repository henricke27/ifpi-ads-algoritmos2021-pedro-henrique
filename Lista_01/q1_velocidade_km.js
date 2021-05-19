   let input = require('prompt-sync')()

    //Entrada

   let velocidade_ms = Number(input('Digite o valor da velocidade (m/s): '))

    //Processamento

   let velocidade_km = velocidade_ms * 3.6 

    //Saída

    console.log('A velocidade ' + velocidade_ms + ' m/s' )
    console.log('É igual a: ' + velocidade_km + ' km/h')
