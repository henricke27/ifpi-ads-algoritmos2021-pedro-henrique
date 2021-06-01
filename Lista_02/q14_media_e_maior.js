var input = require('prompt-sync')()

function main(){
    var primeiro_numero = Number(input('Informe o primeiro número: '))
    var segundo_numero = Number(input('Informe o segundo número: '))
    var terceiro_numero = Number(input('Informe o terceiro número: '))
    var quarto_numero = Number(input('Informe o quarto número: '))
    var quinto_numero = Number(input('Informe o quinto número: '))

    var media_aritmetica = media(primeiro_numero, segundo_numero, terceiro_numero, quarto_numero, quinto_numero)
    console.log(`A média entre esses números é ${media_aritmetica}`)

    if (primeiro_numero > media_aritmetica){
        console.log(`O valor ${primeiro_numero} é maior que a media`)
    } 
    if (segundo_numero > media_aritmetica){
        console.log(`O valor ${segundo_numero} é maior que a media`)
    }
    if (terceiro_numero > media_aritmetica){
        console.log(`O valor ${terceiro_numero} é maior que a media`)
    }
    if (quarto_numero > media_aritmetica){
        console.log(`O valor ${quarto_numero} é maior que a media`)
    }
    if (quinto_numero > media_aritmetica){
        console.log(`O valor ${quinto_numero} é maior que a media`)
    }
}

function media(valor_1, valor_2, valor_3, valor_4, valor_5) {
    var media = (valor_1 + valor_2 + valor_3 + valor_4 + valor_5) / 5
    return media 
}
main()