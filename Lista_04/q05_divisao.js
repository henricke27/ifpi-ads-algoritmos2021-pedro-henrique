const prompt = require('prompt-sync')()

function main() {
    let num_1 = Number(prompt('Digite um número: '))
    let num_2 = Number(prompt('Digite um número: '))

    while(num_2 >= 1){
        let divisao = num_1 / num_2
        console.log(`Divisão: ${divisao.toFixed(2)}`)

        num_1 = divisao
        num_2--
    }
}

main()