    var input = require('prompt-sync')()

    //Entrada 
    
    var metros = Number(input('Digite a quantidade de metros: '))

    //Processamento

    var quilometros = ((metros) -  (metros % 1000)) / 1000 //Poderia ser usado também o parseInt(metros / 1000) para retornar apenas o valor inteiro.
    var resto_metros = metros % 1000 

    //Saída

    console.log(`O valor de ${metros}m corresponde a: ${quilometros}km e ${resto_metros}m`)