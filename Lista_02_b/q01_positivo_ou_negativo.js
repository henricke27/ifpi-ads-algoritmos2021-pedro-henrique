var input = require('prompt-sync')()

function main() {
    var numero = Number(input('Digite um número: '))
    
    if (numero_positivo(numero)) {
        console.log(`O número ${numero} é positivo.`)

    }else if(numero === 0){
        console.log('0 é um número neutro');

    }else{
        console.log(`O número ${numero} é negativo`)
    }

}
function numero_positivo(numero) {
        return numero > 0
}

main()