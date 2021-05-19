    var input = require('prompt-sync')()
   
    //Entrada

    var dividendo = Number(input('Digite o dividendo: '))
    var divisor = Number(input('Digite o divisor: '))

    //Processamento

    var divisão = dividendo / divisor

    var quociente = parseInt(divisão) //parseInt() retorna apenas o inteiro.
    var resto = dividendo % divisor 

    //Saída

    console.log(`O quociente dessa divisão é: ${quociente}`)
    console.log(`O resto dessa divisão é: ${resto}`)
