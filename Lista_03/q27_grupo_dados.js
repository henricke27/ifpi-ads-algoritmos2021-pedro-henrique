const prompt = require('prompt-sync')()

function main() {
    let sexo = 0
    let idade = 0
    let estado_civil = 0
    
    let qntd_sexo_masculino = 0
    let qntd_sexo_feminino = 0

    let soma_idade_mulheres = 0
    let soma_idade_homens = 0

    let media_idade_masc = 0
    let media_idade_femi = 0

    let qntd_homens_solteiros = 0
    let qntd_mulheres_solteiras = 0

    let percentual_homem_solteiro = 0
    let percentual_mulher_solteira = 0

    let qntd_divorciadas = 0

    let total_entrevistados = 0

    while(total_entrevistados !== 5){

        if(total_entrevistados === 5){
            break
        }

        sexo = Number(prompt('Sexo: '))
        idade = Number(prompt('Idade: '))
        estado_civil = Number(prompt('Estado civil: '))

        if(sexo === 1){
            qntd_sexo_masculino++
            soma_idade_homens = soma_idade_homens + idade

            media_idade_masc = soma_idade_homens / qntd_sexo_masculino
        }else{
            qntd_sexo_feminino++
            soma_idade_mulheres = soma_idade_mulheres + idade

            media_idade_femi = soma_idade_mulheres / qntd_sexo_feminino
        }

        if(estado_civil === 2 && sexo === 1){
            qntd_homens_solteiros++

            percentual_homem_solteiro = ((qntd_homens_solteiros * 100) / qntd_sexo_masculino).toFixed(1)
        }else if(estado_civil === 2 && sexo === 2){
            qntd_mulheres_solteiras++

            percentual_mulher_solteira = ((qntd_mulheres_solteiras * 100) / qntd_sexo_feminino).toFixed(1)
        }

        if(sexo === 2 && estado_civil === 3 && idade > 30){
            qntd_divorciadas++
        }

        total_entrevistados++
    }

    console.log(`Média de idade das mulheres: ${media_idade_femi}`)
    console.log(`Média de idade dos homens: ${media_idade_masc}`)
    console.log(`Percentual de homens solteiros: ${percentual_homem_solteiro}%`)
    console.log(`Percentual de mulheres solteiras: ${percentual_mulher_solteira}%`)
    console.log(`Quantidade de mulheres divorciadas acima de 30 anos: ${qntd_divorciadas}`)
}
main()