const prompt = require('prompt-sync')()

function main() {
    let numero = Number(prompt('Digite um número: '))
    let maior_numero = 0

    for(maior_numero = 0; !(numero === 0); numero = Number(prompt('Digite um número: ')) ){
        if(numero > maior_numero){
            maior_numero = numero
        }else{
            continue
        }
    }

    console.log(`Maior número: ${maior_numero}`)
}
main()