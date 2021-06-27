const prompt = require('prompt-sync')()

function main() {
    const numero = Number(prompt('Digite um número: '))

    let valor = 0

    while(numero !== valor){
        valor = Number(prompt('Digite um número compatível: '))
    }
    console.log(`${valor} é igual ao primeiro número lido`)
    
}
main()