var input = require('prompt-sync')()

function main() {

    var primeiro_numero = Number(input('Informe o primeiro número: '))
    var segundo_numero = Number(input('Informe o segundo número: '))

    verificar_menor_numero(primeiro_numero, segundo_numero)
    verificar_maior_numero(primeiro_numero, segundo_numero)
}

function verificar_menor_numero(valor_1, valor_2){
    if(valor_1 < valor_2){
        return console.log(`O menor número é o ${valor_1}`)

    }else{
        return console.log(`O menor número é o ${valor_2}`)

    } 
}
function verificar_maior_numero(valor_1, valor_2)  {
    if(valor_1 > valor_2){
        return console.log(`O maior número é o ${valor_1}`)

    }else{
        return console.log(`O maior número é o ${valor_2}`)

    }
}

main()