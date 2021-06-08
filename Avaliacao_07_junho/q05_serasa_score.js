var input = require('prompt-sync')()

function main() {
    var primeiro_criterio = Number(input(`Informe o valor do primeiro critério: `))
    var segunda_criterio = Number(input(`Informe o valor do segundo critério: `))
    var terceiro_criterio = Number(input(`Informe o valor do terceiro critério: `))

    var valor_score_antigo = calcular_score_antigo(primeiro_criterio, segunda_criterio, terceiro_criterio)
    var valor_score_novo = calcular_score_novo(primeiro_criterio, segunda_criterio, terceiro_criterio)

    var faixa_score_antigo = verificar_faixa_score_antigo(valor_score_antigo)
    var faixa_score_novo = verificar_faixa_score_novo(valor_score_novo)

    console.log(`Score 1.0: ${valor_score_antigo} - ${faixa_score_antigo}`)
    console.log(`Score 2.0: ${valor_score_novo} - ${faixa_score_novo}`)
}

function calcular_score_antigo(valor_1, valor_2, valor_3) {
    var peso_a = valor_1 * (26/100)
    var peso_b = valor_2 * (57/100)
    var peso_c = valor_3 * (17/100)

    return parseInt(((valor_1 * peso_a) + (valor_2 * peso_b) + (valor_3 * peso_c)) / 10)
}
function calcular_score_novo(valor_1, valor_2, valor_3) {
    var peso_a = valor_1 * (62/100)
    var peso_b = valor_2 * (19/100)
    var peso_c = valor_3 * (19/100)

    return parseInt(((valor_1 * peso_a) + (valor_2 * peso_b) + (valor_3 * peso_c)) /10)
}

function verificar_faixa_score_antigo(score) {
    if(score < 400){
        return 'Baixo'
    }else if(score < 600){
        return 'Regular'
    }else if(score < 800){
        return 'Bom'
    }else{
        return 'Muito bom'
    }
}
function verificar_faixa_score_novo(score) {
    if(score <= 300){
        return 'Baixo'
    }else if(score <= 500){
        return 'Regular'
    }else if(score <= 700){
        return 'Bom'
    }else{
        return 'Muito bom'
    }
    
}
main()