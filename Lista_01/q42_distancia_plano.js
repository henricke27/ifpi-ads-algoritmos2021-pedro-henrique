    var input = require('prompt-sync')()

    //Entrada

    var x1 = Number(input('Digite o x1 do ponto 1: '))
    var y1 = Number(input('Digite o y1 do ponto 1: '))
    var x2 = Number(input('Digite o x2 do ponto 2: '))
    var y2 = Number(input('Digite o y2 do ponto y: '))

    //Processamento

    var distancia = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2))  

    //Saída

    console.log(`A distância entre ponto 1 e o ponto 2 é: ${distancia.toFixed(2)}`)