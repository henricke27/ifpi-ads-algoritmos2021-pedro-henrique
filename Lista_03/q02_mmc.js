const prompt = require('prompt-sync')()

function main() {
    const primeiro_numero = Number(prompt('Digite o primeiro número: '))
    const segundo_numero = Number(prompt('Digite o segundo número: '))
    
    let contador = 1

    while(!(contador % primeiro_numero === 0 && contador % segundo_numero === 0)){
        contador++
    }

    console.log(`O MMC entre esses números é: ${contador}`)
}

main()