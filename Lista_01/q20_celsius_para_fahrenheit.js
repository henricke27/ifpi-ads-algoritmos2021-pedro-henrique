    var input = require('prompt-sync')()
    
    //Entrada

    var grau_celsius = Number(input('Temperatura em graus celsius: '))

    //Processamento 

    var grau_fahrenheit = (9 * grau_celsius + 160) / 5

    //Saída 

    console.log(`A temperatura ${grau_celsius}°C equivale a: ${grau_fahrenheit}°F `)