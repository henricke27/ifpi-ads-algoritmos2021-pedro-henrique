const prompt = require('prompt-sync')()

function main() {
    let numero = Number(prompt('Digite um número: '))

    while(numero >= 1){
        numero = numero / 2
       
    }
    console.log(`O último resultado é ${numero}`)
}

main()