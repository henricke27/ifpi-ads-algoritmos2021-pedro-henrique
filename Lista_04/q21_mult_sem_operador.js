const prompt = require('prompt-sync')()

function main() {
    let primeiro_numero = Number(prompt('Digite o primeiro número: '))
    let segundo_numero = Number(prompt('Digite o segundo número: '))

    let contador = segundo_numero
    let acumulador = 0

    while(contador !== 0){
        acumulador = acumulador + primeiro_numero

        contador--
    }
    console.log(`Resultado: ${acumulador}`)
}

main()