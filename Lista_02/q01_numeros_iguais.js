var input = require('prompt-sync')()

function main() {

    var primeiro_numero = Number(input('Informe o primeiro número: '))
    var segundo_numero = Number(input('Informe o segundo número: '))
    var terceiro_numero = Number(input('Informe o terceiro número: '))
   
    var numeros_iguais = Number(verifica_numeros_iguais(primeiro_numero, segundo_numero, terceiro_numero))
    
    if (numeros_iguais > 0) {
        console.log(`Existem ${numeros_iguais} números iguais.`)        
    }else{
        console.log(`Não existem números iguais`)
    }
   
}

function verifica_numeros_iguais(primeiro_valor, segundo_valor, terceiro_valor) {
    if ((primeiro_valor === segundo_valor) && (primeiro_valor === terceiro_valor)) {
        return 3

    }else if ((primeiro_valor === segundo_valor) && (primeiro_valor !== terceiro_valor)) {
        return 2

    }else if ((primeiro_valor === terceiro_valor) && (primeiro_valor!== segundo_valor)) {
        return 2

    }else if ((segundo_valor === terceiro_valor) && (segundo_valor!== primeiro_valor)) {
        return 2

    }else{
        return 0
    }
}   
main()