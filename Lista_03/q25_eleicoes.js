const prompt = require('prompt-sync')()

function main() {
    let votos_bolsonaro = 0
    let votos_ciro = 0
    let votos_lula = 0
    let votos_nulos = 0
    let votos_brancos = 0

    let eleitores = 0
    let vencedor = ''
    
    for(let i; i !== -1 ; i){

        i = Number(prompt('Voto: '))

        if(i === 1){
            votos_bolsonaro++
        }else if(i === 2){
            votos_ciro++
        }else if(i === 3){
            votos_lula++
        }else if(i === 9){
            votos_nulos++
        }else if(i === 0){
            votos_brancos++
        }

        if(i !== -1){
            eleitores++
        }

        vencedor = vencedor_eleicoes(votos_bolsonaro, votos_ciro, votos_lula)

    }
    console.log(`Número de eleitores: ${eleitores}`)
    console.log(`Bolsonaro: ${votos_bolsonaro}`)
    console.log(`Ciro: ${votos_ciro}`)
    console.log(`Lula: ${votos_lula}`)
    console.log(`Votos nulos: ${votos_nulos}`)
    console.log(`Votos em branco: ${votos_brancos}`)
    console.log(`${vencedor} é o presidente`)
}

function vencedor_eleicoes(bolsonaro, ciro, lula) {
    if(bolsonaro > ciro && bolsonaro > lula){
        return 'Bolsonaro'

    }if(ciro > bolsonaro && ciro > lula){
        return 'Ciro'

    }if(lula > ciro && lula > bolsonaro){
        return 'Lula'
    }
}
main()