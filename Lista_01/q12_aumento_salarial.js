    var input_salario = require('prompt-sync')()

    //Entrada

    var salario = Number(input_salario('Digite o seu salário atual R$: '))

    //processamento

    var novo_salario = salario * 1.25

    //Saída

    console.log(`O aumento salarial de 25% corresponde a: R$${novo_salario}`)