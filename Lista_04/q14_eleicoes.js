const prompt = require('prompt-sync')()

function main() {
    let opiniao = 0

    let total_entrevistados = 0
    let serra = 0
    let dilma = 0
    let ciro = 0
    let indecisos = 0
    let outros = 0
    let nulos = 0

    while(opiniao !== -1){
        opiniao = Number(prompt('Informe a opiniao de voto: '))

        total_entrevistados++

        if(opiniao === -1){
            total_entrevistados--
            break
        }

        if(opiniao === 45){
            serra++
        }else if(opiniao === 13){
            dilma++
        }else if(opiniao === 23){
            ciro++
        }else if(opiniao === 99){
            indecisos++
        }else if(opiniao === 98){
            outros++
        }else{
            nulos++
        }
    }

    console.log(`Serra: ${porcentagem(serra, total_entrevistados)}% votos`)
    console.log(`Dilma: ${porcentagem(dilma, total_entrevistados)}% votos`)
    console.log(`Ciro: ${porcentagem(ciro, total_entrevistados)}% votos`)
    console.log(`Outros: ${porcentagem(outros, total_entrevistados)}% votos`)
    console.log(`Indecisos: ${porcentagem(indecisos, total_entrevistados)}% votos`)
    console.log(`Nulos: ${porcentagem(nulos, total_entrevistados)}% votos`)
    console.log(`Total de entrevistados: ${total_entrevistados}`)
    console.log(verificar_segundo_turno(serra, dilma, ciro, total_entrevistados))

}

function porcentagem(candidato, total) {
    return ((100 * candidato) / total).toFixed(2)
}

function verificar_segundo_turno(candidato_1, candidato_2, candidato_3, total_entrevistados) {
    candidato_1 = porcentagem(candidato_1, total_entrevistados)
    candidato_2 = porcentagem(candidato_2, total_entrevistados)
    candidato_3 = porcentagem(candidato_3, total_entrevistados)


    if(candidato_1 > 50 || candidato_2 > 50|| candidato_3 > 50){
        return 'Talvez não tenha segundo turno'
    }else{
        return 'Poderá haver segundo turno'
    }
}
main()
