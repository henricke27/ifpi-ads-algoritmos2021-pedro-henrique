var input = require('prompt-sync')()

function main(){
    var primeira_nota = Number(input('Informe a primeira nota: '))
    var segunda_nota = Number(input('Informe a segunda nota: '))
    var media = (primeira_nota + segunda_nota) / 2

    if(media >= 7){
        console.log('Aprovado')

    }else if(media >= 5){
        console.log('Aprovado')

    }else {
        console.log('Reprovado')
    }

}

main()