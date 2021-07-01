const prompt = require('prompt-sync')()

function main() {
    let limite_superior = Number(prompt('Digite o limite superior: '))
    let limite_inferior = Number(prompt('Digite o limite inferior: '))

    for(let i = limite_inferior + 1; i < limite_superior; i++){
        if(verificar_primo(i)){
            console.log(i)
        }
    }
}

function verificar_primo(valor) {
    for(let i = 2 ; i < valor; i++){
        if(valor % i === 0){
            return false
        }
    }
}
main()