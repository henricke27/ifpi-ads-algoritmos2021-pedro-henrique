var input = require('prompt-sync')()

function main(){
    var numero = Number(input('Digite um valor: '))

    if(primo(numero)){
        console.log(`O número ${numero} é primo.`)
    }else{
        console.log(`O número ${numero} não é primo.`)
    }
}

function primo(numero){
    if(numero === 2 || numero === 3 || numero === 5 || numero === 7){
        return true
        
    }else if((numero % 2 === 0) || (numero % 3 === 0) || (numero % 5 === 0) || (numero % 7 === 0)){
        return false

    }else{
        return true
    }
}
main()
