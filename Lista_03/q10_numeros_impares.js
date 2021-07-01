const prompt = require('prompt-sync')()

function main() {
    let limite_superior = Number(prompt('Digite o limite superior: '))
    let limite_inferior = Number(prompt('Digite o limite inferior: '))

    for(let i = limite_inferior + 1; i < limite_superior; i++){
            if(i % 2 !== 0){
            console.log(i)
        }
    }
}
main()