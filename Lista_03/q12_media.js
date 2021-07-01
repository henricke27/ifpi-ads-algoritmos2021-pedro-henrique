const prompt = require('prompt-sync')()

function main() {
    let numero = Number(prompt('Digite um número: '))
    let somatorio = 0
    let media = 0

    for(let denominador = 1; !(numero === 0); denominador++){
        somatorio = somatorio + numero
        media = somatorio / denominador

        numero = Number(prompt('Digite um número: '))
    }

    console.log(`Soma: ${somatorio}`)
    console.log(`Média: ${media}`)

}
main()