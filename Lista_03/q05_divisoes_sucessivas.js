const prompt = require('prompt-sync')()

function main() {
    let numero_x = Number(prompt('Digite um número X: '))
    let numero_n = Number(prompt('Digite um número N: '))
    
    for(numero_x; numero_n > 2; inicio = numero_n--){
        numero_x = numero_x / numero_n

        console.log(numero_x.toFixed(2))
    }
}
main()