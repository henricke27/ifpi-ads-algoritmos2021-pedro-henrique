const prompt = require('prompt-sync')()

function main() {
    let numero_n = Number(prompt('Digite um número: '))

    let termo = 0
    let termo_anterior = 0
    let termo_posterior = 1

    if(numero_n >= 2){
        console.log(termo_anterior)
        console.log(termo_posterior)
        
        for(let i = 2 ; i !== numero_n ; i++){
            termo = termo_anterior + termo_posterior
            console.log(termo)

            termo_anterior = termo_posterior
            termo_posterior = termo
        }
    }else{
        console.log('Somente um valor maior ou igual a 2')
    }
}
main()