const prompt = require('prompt-sync')()

function main() {
    let numero = Number(prompt('Digite um número: '))

    for(i = 1; i <= numero; i++){

        console.log(i)
    }
    
}
main()