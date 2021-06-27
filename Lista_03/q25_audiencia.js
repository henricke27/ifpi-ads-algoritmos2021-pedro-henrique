const prompt = require('prompt-sync')()

function main() {
    let voto = 1
    let membros_casa = 0

    let acumulador_2 = 0
    let acumulador_4 = 0 
    let acumulador_5 = 0
    let acumulador_7 = 0
    let acumulador_10 = 0

    let acumulador_pessoas = membros_casa

    while(voto !== 0){
        voto = Number(prompt('Informe o canal de preferência: '))

        if(voto === 0){
            break
        }

        membros_casa = Number(prompt('Informe a quantidade de pessoas da casa: ')) //consenso do melhor canal entre os membros da casa.

        acumulador_pessoas = acumulador_pessoas + membros_casa

        if(voto === 2){
            acumulador_2 = acumulador_2 + membros_casa
        }else if(voto === 4){
            acumulador_4 = acumulador_4 + membros_casa 
        }else if(voto === 5){
            acumulador_5 = acumulador_5 + membros_casa
        }else if(voto === 7){
            acumulador_7 = acumulador_7 + membros_casa
        }else{
            acumulador_10 = acumulador_10 + membros_casa
        }

    }
    console.log(`O canal 2 possui uma audiência correspondente a ${calcular_percentual(acumulador_2, acumulador_pessoas)}% do público entrevistado.`)
    console.log(`O canal 4 possui uma audiência correspondente a ${calcular_percentual(acumulador_4, acumulador_pessoas)}% do público entrevistado.`)
    console.log(`O canal 5 possui uma audiência correspondente a ${calcular_percentual(acumulador_5, acumulador_pessoas)}% do público entrevistado.`)
    console.log(`O canal 7 possui uma audiência correspondente a ${calcular_percentual(acumulador_7, acumulador_pessoas)}% do público entrevistado.`)
    console.log(`O canal 10 possui uma audiência correspondente a ${calcular_percentual(acumulador_10, acumulador_pessoas)}% do público entrevistado.`)
}

function calcular_percentual(votos, total_pessoas) {
    return ((votos * 100) / total_pessoas).toFixed(2)
}
main()