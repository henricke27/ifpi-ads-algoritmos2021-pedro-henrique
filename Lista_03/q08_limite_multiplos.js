const prompt = require('prompt-sync')()

function main() {
    let numero = Number(prompt('Digite um número: '))
    let limite_superior = Number(prompt('Digite o limite superior: '))
    let limite_inferior = Number(prompt('Digite o limite inferior: '))
    let multiplo = 0

    for(let multiplicador = limite_inferior; multiplo < limite_superior; multiplicador++){
            multiplo = multiplicador * numero
            console.log(multiplo)
        
    }
}
main()