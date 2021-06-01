var input = require('prompt-sync')()

function main() {
    var primeiro_numero = Number(input('Digite o primeiro número: '))
    var segundo_numero = Number(input('Digite o segundo número: '))
    var terceiro_numero = Number(input('Digite o terceiro número: '))

    var maior_numero = verifica_maior_numero(primeiro_numero, segundo_numero, terceiro_numero)
    console.log(`O maior número é o ${maior_numero}`)
}

function verifica_maior_numero(valor_1, valor_2, valor_3){
    if(valor_1 > valor_2 && valor_1 > valor_3){
        return valor_1

    }else if(valor_2 > valor_1 && valor_2 > valor_3){
        return valor_2

    }else if(valor_3 > valor_1 && valor_3 > valor_1){
        return valor_3

    }else{
        return valor_1
    }
}

main()