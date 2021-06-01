var input = require('prompt-sync')()

function main() {
    var numero = Number(input('Digite um número com dois dígitos: '))
        
    if (dezena_igual_unidade(numero)){
        console.log(`O algarismo da dezena é igual ao da unidade.`)

    }else{
        console.log(`O algarismo da dezena é diferente ao da unidade.`)

    }
}

function dezena_igual_unidade(valor) {
    return ((parseInt(valor / 10)) === (valor % 10))
    
}

main()