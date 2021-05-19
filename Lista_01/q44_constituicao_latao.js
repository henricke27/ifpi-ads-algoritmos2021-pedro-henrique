    var input = require('prompt-sync')()
    
    //Entrada

    var quantidade_latao = Number(input('Informe a quantidade de latão em quilograma: '))
    
    //Processamento

    var porcentagem_cobre = quantidade_latao * 0.7
    var porcentagem_zinco = quantidade_latao * 0.3

    //Saída

    console.log(`Para obter ${quantidade_latao}Kg de latão é necessario: ${porcentagem_cobre}Kg de cobre e ${porcentagem_zinco}Kg de zinco`)