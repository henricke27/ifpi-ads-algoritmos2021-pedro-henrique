var input = require('prompt-sync')()

function main() {
    var numero = Number(input('Digite um número: '))

    if(parte_fracionaria(numero) >= 0.5){
    var numero_arredondado = parseInt(numero) + 1
    console.log(`O número foi arredondado para ${numero_arredondado}`) 

    }else{
    var numero_arredondado = parseInt(numero)
    console.log(`O número foi arredondado para ${numero_arredondado}`)
    }
}

function parte_fracionaria(numero) {
    return numero % parseInt(numero)
}
main()