var input = require('prompt-sync')()

function main(){

    var opcoes = Number(input('Escolha uma das opções: 1 - 2 - 3 : '))

    
    if(opcoes_valor(opcoes)){
        console.log(`O valor da opção ${opcoes} é: ${opcoes_valor(opcoes)}`)}

    else{
        console.log(`Erro. Selecione apenas uma das opções descritas!`)
    }
}

function opcoes_valor(numero) {
    if(numero === 1){
        return 10

    }else if(numero === 2){
        return 20
    
    }else if(numero === 3){
        return 30

    }else if(numero >= 4){
        return false
        
    }
}

main()