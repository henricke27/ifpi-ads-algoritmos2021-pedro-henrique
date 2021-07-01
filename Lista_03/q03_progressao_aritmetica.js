const prompt = require('prompt-sync')()

function main() {
    let inicio = Number(prompt('Digite o inicio: '))
    const limite = Number(prompt('Digite o limite: '))
    const razao = Number(prompt('Digite a razão: '))

    for(inicio; inicio <= limite; inicio = inicio + razao ){

        console.log(inicio)
    }
    
}
main()