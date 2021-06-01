var input = require('prompt-sync')()

function main(){
    var primeiro_numero = Number(input('Informe o primeiro número: '))
    var segundo_numero = Number(input('Informe o segundo número: '))
    var terceiro_numero = Number(input('Informe o terceiro número: '))
    var quarto_numero = Number(input('Informe o quarto número: '))
    var quinto_numero = Number(input('Informe o quinto número: '))

    console.log(`O maior número é o ${maior_numero(primeiro_numero, segundo_numero, terceiro_numero, quarto_numero, quinto_numero)}`)
    console.log(`O menor número é o ${menor_numero(primeiro_numero, segundo_numero, terceiro_numero, quarto_numero, quinto_numero)}`)
}
function maior_numero(primeiro, segundo, terceiro, quarto, quinto) {
    var maior_primeiro = primeiro > segundo && primeiro > terceiro && primeiro > quarto && primeiro > quinto 
    var maior_segundo = segundo > primeiro && segundo > terceiro && segundo > quarto && segundo > quinto
    var maior_terceiro = terceiro > primeiro && terceiro > segundo && terceiro > quarto && terceiro > quinto
    var maior_quarto = quarto > primeiro && quarto > segundo && quarto > terceiro && quarto > quinto
    var maior_quinto = quinto > primeiro && quinto > segundo && quinto > terceiro && quinto > quarto

    if(maior_primeiro){
        return primeiro

    }else if(maior_segundo){
        return segundo

    }else if(maior_terceiro){
        return terceiro

    }else if(maior_quarto){
        return quarto

    }else if(maior_quinto){
        return quinto
    }
}  

function menor_numero(primeiro, segundo, terceiro, quarto, quinto) {
    var menor_primeiro = primeiro < segundo && primeiro < terceiro && primeiro < quarto && primeiro < quinto 
    var menor_segundo = segundo < primeiro && segundo < terceiro && segundo < quarto && segundo < quinto
    var menor_terceiro = terceiro < primeiro && terceiro < segundo && terceiro < quarto && terceiro < quinto
    var menor_quarto = quarto < primeiro && quarto < segundo && quarto < terceiro && quarto < quinto
    var menor_quinto = quinto < primeiro && quinto < segundo && quinto < terceiro && quinto < quarto

    if(menor_primeiro){
        return primeiro

    }else if(menor_segundo){
        return segundo

    }else if(menor_terceiro){
        return terceiro

    }else if(menor_quarto){
        return quarto

    }else if(menor_quinto){
        return quinto
    }
}
main()