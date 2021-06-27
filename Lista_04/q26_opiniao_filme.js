const prompt = require('prompt-sync')()

function main() {
    let opiniao = 0
    let idade = 0

    let acumulador_otimo = 0
    let acumulador_regular = 0
    let acumulador_bom = 0

    let acumulador_idade = idade
    let total_entrevistados = 0

    while(!(idade === -1)){
        idade = Number(prompt('Idade do entrevistado: '))

        opiniao = Number(prompt('Opinião a respeito do filme: '))

        if(opiniao === 1 && idade !== -1){
            acumulador_idade = acumulador_idade + idade
            acumulador_otimo++
        }else if(opiniao == 2 && idade !== -1){
            acumulador_bom++
        }else if(opiniao === 3 && idade !== -1){
            acumulador_regular++
        }

        if(!(idade === -1)){
            total_entrevistados++
        }

    }
    console.log(`Média de idade das pessoas que responderam "ótimo": ${media_idade(acumulador_idade, acumulador_otimo)}`)
    console.log(`Quantidade de pessoas que responderam "regular": ${acumulador_regular}`)
    console.log(`Percentual de pessoas que responderam "bom": ${percentual_bom(acumulador_bom, total_entrevistados)}%`)
    console.log(total_entrevistados)
}

function media_idade(idade, entrevistados) {
    return (idade / entrevistados).toFixed(1)
}

function percentual_bom(total_bom, entrevistados) {
    return ((total_bom * 100) / entrevistados).toFixed(1)
}
main()