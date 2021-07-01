const prompt = require('prompt-sync')()

function main() {
    let salario = 0
    let filhos = 0

    let somatorio_salario = 0
    let media_salarial = 0

    let somatorio_filhos = 0
    let media_filhos = 0

    let hab_mil = 0
    let per_mil = 0

    for(let habitantes = 0 ; salario !== -1 ; habitantes++){
        somatorio_salario = somatorio_salario + salario
        media_salarial = somatorio_salario / habitantes

        somatorio_filhos = somatorio_filhos + filhos
        media_filhos = somatorio_filhos / habitantes

        per_mil = (100 * hab_mil) / habitantes

        salario = Number(prompt('Salário: '))

        if(salario < 1000 && salario !== -1){
            hab_mil++
        }

        filhos = Number(prompt('Quatidade de filhos: '))
    }

    console.log(`Média de salário da população: ${media_salarial}`)
    console.log(`Média de números de filhos: ${media_filhos}`)
    console.log(`Percentual de pessoas com salário de até R$1000,00: ${per_mil}% `)
}
main()