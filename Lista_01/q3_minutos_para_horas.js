    let input = require('prompt-sync')()
    
    //entrada

    let minutos = Number(input('Quantidade de minutos: '))
    
    //Processamento

    let horas = minutos / 60
    
    //Saída

    console.log(`Valor em minutos: ${minutos}`)
    console.log(`Esse valor em horas é: ${horas.toFixed(1)}`)