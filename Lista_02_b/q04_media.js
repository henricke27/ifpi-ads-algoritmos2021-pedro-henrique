var input = require('prompt-sync')()

function main() {
    var primeira_nota = Number(input('Digite a primeira nota: '))
    var segunda_nota = Number(input('Digite a segunda nota: '))

    if(media(primeira_nota, segunda_nota) === 10){
        console.log('Aprovado com distinção!')
    }else if(media(primeira_nota, segunda_nota) >= 7 && media(primeira_nota, segunda_nota) < 10){
        console.log('Aprovado!')
    }else{
        console.log('Reprovado!')
    }

}

function media(nota_1, nota_2){
    return (nota_1 + nota_2) / 2
}

main()