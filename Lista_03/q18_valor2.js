const prompt = require('prompt-sync')()

function main() {
    let valor = Number(prompt('Primeiro termo do denominador: '))
    let somatorio = 0

    for(let i = valor; i >= 1; i--){

        somatorio = somatorio + (1 / i)   

    }

    console.log(`Somatório: ${somatorio}`)

}
main()