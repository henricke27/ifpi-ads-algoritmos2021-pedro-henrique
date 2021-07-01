const prompt = require('prompt-sync')()

function main() {
    let valor = Number(prompt('Último termo do denominador: '))
    let somatorio = 0

    for(let i = 1; i <= valor; i++){

        somatorio = somatorio + (1 / i)   

    }

    console.log(`Somatório: ${somatorio}`)

}
main()