var input = require('prompt-sync')()

function main(){
    var numero = Number(input('Digite um número: '))

    if(numero % 2 === 0){
        console.log(`O número é par.`)

    }else{
        console.log(`O número é ímpar.`)
    }
}

main()