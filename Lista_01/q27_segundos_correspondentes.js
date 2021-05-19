    var input = require('prompt-sync')()
    
    //Entrada 

    var segundos = Number(input('Digite a quantidade de segundos: '))

    //Processamento

    var horas = parseInt(segundos / 3600) //Converter de segundos para horas
    var minutos = parseInt((segundos % 3600) / 60) //Converter de segundos para minutos. 
    var restante_segundos = segundos % 60 //Segundos que restaram das operações anteriores.

    //Saída

    console.log(`O valor de ${segundos} segundos corresponde a: ${horas} horas, ${minutos} minutos e ${restante_segundos} segundos.`)