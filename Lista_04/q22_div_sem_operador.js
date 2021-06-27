const prompt = require('prompt-sync')()

function main() {
    let primeiro_numero = Number(prompt('Digite o primeiro número: '))
    let segundo_numero = Number(prompt('Digite o segundo número: '))

    let continuar = true
    let contador = 0
    let mult = 0
    let quociente = 0

    while(mult !== primeiro_numero || continuar === true){
        contador++
        mult = contador * segundo_numero

        if(mult > primeiro_numero){
            contador--
            quociente = primeiro_numero - (contador * segundo_numero)
            continuar = false
            break
        }
    }
    console.log(`Resultado: ${contador}`)
    console.log(`Quociente: ${quociente}`)
}

main()