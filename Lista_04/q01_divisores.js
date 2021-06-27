const prompt = require('prompt-sync')()

function main() {
    let numero = Number(prompt('Digite um número: '))

    let divisor = 1

    while(numero >= divisor){
        if(numero % divisor === 0){
            console.log(`${divisor} é divisor de ${numero}`)
        }
        divisor++
    }
    
}

main()