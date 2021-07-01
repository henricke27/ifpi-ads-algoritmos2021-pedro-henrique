const prompt = require('prompt-sync')()

function main() {
    let numero = Number(prompt('Digite um número: '))
    let digitos = 0

    for(digitos = 1; numero > 1; digitos++){

        numero = parseInt(numero / 10)

    }

    console.log(`Quantidade de dígitos: ${digitos}`)

}
main()