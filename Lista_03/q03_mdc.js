const prompt = require('prompt-sync')()

function main() {
    const primeiro_numero = Number(prompt('Digite o primeiro número: '))
    const segundo_numero = Number(prompt('Digite o segundo número: '))
    
    let maior_numero = primeiro_numero > segundo_numero ? primeiro_numero : segundo_numero
    let contador = maior_numero

    while(!(primeiro_numero % contador === 0 && segundo_numero % contador === 0)){
        contador--
    }

    console.log(`O MDC entre esses números é: ${contador}`)
}

main()