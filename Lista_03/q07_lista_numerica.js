const prompt = require('prompt-sync')()

function main() {
    let primeiro_numero = Number(prompt('Digite o primeiro número: '))

    for(let numeros = 0; numeros !== primeiro_numero;   ){
        numeros = Number(prompt('Digite um número: '))

        console.log(numeros)
    }

    console.log(`O número digitado é igual ao primeiro valor.`)

}
main()