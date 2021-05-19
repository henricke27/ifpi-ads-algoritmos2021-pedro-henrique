    var input = require('prompt-sync')()
    
    //Entrada

    var grau_fahrenheit = Number(input('Temperatura em graus fahrenheit: '))

    //Processamento

    var grau_celsius = (5 * grau_fahrenheit - 160) / 9
    
    //Saída

    console.log(`A temperatura ${grau_fahrenheit}°F equivale a: ${grau_celsius}°C`)

