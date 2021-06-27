const prompt = require('prompt-sync')()

function main() {
    let num_aleatorio = 0
    let numero = 1

    let resultado = ''
    let tentativas = 0

    while(num_aleatorio !== numero){
        num_aleatorio = Math.floor(Math.random() * 10)
        numero = Number(prompt('Digite um número: '))

        tentativas++

        if(numero > num_aleatorio){
            resultado = 'Menor'
        }else if(numero < num_aleatorio){
            resultado = 'Maior'
        }else{
            resultado = 'Acertou'
            break
        }
    
        console.log(resultado)

    }
    console.log(`${resultado} com ${tentativas} tentativas.`)
}
main()