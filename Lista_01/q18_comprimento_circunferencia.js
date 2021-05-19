    var input = require('prompt-sync')()
    
    //Entrada

    var raio_circunferencia = Number(input('Informe o raio da cincunferência: '))

    //Processamento

    var pi = 3.14
    var comprimento_cincunferencia = 2 * pi * raio_circunferencia 

    //Saída

    console.log(`O comprimento da cincunferência é: ${comprimento_cincunferencia.toFixed(2)}`)