    const input = require('prompt-sync')()
    
    //Entrada

    let horas = Number(input('Quantidade de horas: '))
    let minutos = Number(input('Quantidade de minutos: '))

    //Processamento

    let horas_convertida = horas * 60
    let total_minutos = (horas_convertida) + (minutos)

    //Saída

    console.log(`O total de minutos é: ${total_minutos}.`)
