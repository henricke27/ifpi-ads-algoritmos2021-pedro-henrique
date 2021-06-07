var input = require('prompt-sync')()

function main() {
    var primeira_nota = Number(input('Digite a primeira nota: '))
    var segunda_nota = Number(input('Digite a segunda nota: '))

    var media = (primeira_nota + segunda_nota) / 2
    var conceito = verificar_conceito(media)

    console.log(`Notas: ${primeira_nota} e ${segunda_nota}`)
    console.log(`Média: ${media.toFixed(2)}`)
    console.log(`Conceito: ${conceito}`)

    if(media >= 6){
        console.log('Aprovado!')
    }else{
        console.log('Reprovado!')
    }
}

function verificar_conceito(valor) {
    if(valor >= 9){
        return 'A'
    }else if(valor >= 7.5){
        return 'B'
    }else if(valor >= 6){
        return 'C'
    }else if(valor >= 4){
        return 'D'
    }else{
        return 'E'
    }  
}
main()