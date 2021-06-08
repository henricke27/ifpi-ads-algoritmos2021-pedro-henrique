var input = require('prompt-sync')()

function main() {
    var nota_primeira_avaliacao = Number(input('Informe a nota da primeira avaliação: '))
    var nota_segunda_avaliacao = Number(input('Informe a nota da segunda avaliação: '))
    var nota_atividades = Number(input('Informe a nota obtida pelas atividades: '))

    var media_semestral = calcular_media_semestral(nota_primeira_avaliacao, nota_segunda_avaliacao, nota_atividades)

    if(media_semestral >= 7){
        console.log(`Média semestral: ${media_semestral.toFixed(1)}`)
        console.log(`Aprovado`)
    }else if(media_semestral >= 4 && media_semestral < 7){
        var nota_prova_final = Number(input('Informe a nota obtida na prova final: '))
        var media_pos_prova_final = calcular_media_prova_final(nota_prova_final, media_semestral)

        if(media_pos_prova_final >= 6){
            console.log(`Média semestral pós prova final: ${media_pos_prova_final.toFixed(1)}`)
            console.log(`Aprovado pós prova final`)
        }else{
            console.log(`Média semestral pós prova final: ${media_pos_prova_final.toFixed(1)}`)
            console.log(`Reprovado pós prova final`)
        }
    }else {
        console.log(`Média semestral: ${media_semestral.toFixed(1)}`)
        console.log(`Reprovado`)
    }
}


function calcular_media_semestral(primeira_nota, segunda_nota, terceira_nota) {
    return ((primeira_nota * 2) + (segunda_nota * 3) + (terceira_nota * 1)) / (2 + 3 + 1) 
}

function calcular_media_prova_final(nota_final, media_semestral) {
    return (nota_final + media_semestral) / 2
}
main()