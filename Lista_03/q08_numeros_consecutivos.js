const prompt = require('prompt-sync')()

function main() {
    let numero = Number(prompt('Digite um número: '))

    let somatorio = 0

    while(numero !== somatorio){
        novo_numero = Number(prompt('Digite outro número: '))
        somatorio = somatorio + novo_numero

        novo_numero =Number(prompt('Digite outro número: '))
        somatorio = somatorio + novo_numero

        if(numero === somatorio){
            numero === somatorio
        }else{
            somatorio = 0
        }
    }
    console.log(`A soma entre os dois últimos números consecutivos é igual a ${numero}`)
    
}
main()