const prompt = require('prompt-sync')()

function main() {
    let numero = Number(prompt('Digite um número: '))

    for(i = 0; i <= numero; i++){

        if(i % 2 !== 0){
            continue
        }

        console.log(i)
    }
    
}
main()