const prompt = require('prompt-sync')()

function main() {
    let termo = Number(prompt('Último termo do denominador: '))
    let acumulador = 0
    let numerador = 1

    for(let denominador = 1; denominador <= termo; denominador++){

        acumulador = acumulador + (numerador / denominador)   

        numerador = numerador + 2

    }

    console.log(`Somatório: ${acumulador}`)

}
main()