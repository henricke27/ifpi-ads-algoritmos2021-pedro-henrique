const prompt = require('prompt-sync')()

function main() {
    let numero = Number(prompt('Digite um número: '))

    let multiplicador = 1
    let contador = 0

    while(multiplicador < numero){
        multiplicador = multiplicador * 10
    
        contador++
      
    }
    console.log(`O número de dígitos é ${contador}`)
}
main()