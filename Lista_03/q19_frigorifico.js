const prompt = require('prompt-sync')()

function main() {
    let numero_identificacao = 1
    let peso = 0

    let mais_gordo = 0 
    let mais_magro = 0

    let identificacao_gordo = 0
    let identificacao_magro = 0

    while(numero_identificacao !== 0){
        numero_identificacao = Number(prompt('Informe o número de identificação do boi: '))

        peso = Number(prompt('Informe o peso do boi (kg): '))

        if(mais_magro === 0 && numero_identificacao !== 0){
            mais_magro = peso
        }

        if(peso > mais_gordo && numero_identificacao !== 0){
            mais_gordo = peso
            identificacao_gordo = numero_identificacao
        }
        if(peso < mais_magro && numero_identificacao !== 0){
            mais_magro = peso
            identificacao_magro = numero_identificacao
        }
    }

    console.log(`O boi ${identificacao_gordo} é o mais gordo com ${mais_gordo} kg`)
    console.log(`O boi ${identificacao_magro} é o mais magro com ${mais_magro} kg`)
}
main()