var input = require('prompt-sync')()

function main() {
    var primeiro_lado = Number(input('Informe o valor do primeiro lado: '))
    var segundo_lado = Number(input('Informe o valor do segundo lado: '))
    var terceiro_lado = Number(input('Informe o valor do terceiro lado: '))

    if(verifica_triangulo(primeiro_lado, segundo_lado, terceiro_lado)){
        console.log(`É possível formar um triângulo do tipo ${tipo_triangulo(primeiro_lado, segundo_lado, terceiro_lado)} com essas medidas.`)
    }else{
        console.log(`Não é possível formar um triângulo com essas medidas.`)
    }
}

function verifica_triangulo(primeiro_lado, segundo_lado, terceiro_lado) {
    var condicao_1 = (segundo_lado - terceiro_lado) < primeiro_lado && primeiro_lado < (segundo_lado + terceiro_lado)
    var condicao_2 = (primeiro_lado - terceiro_lado) < segundo_lado && segundo_lado < (primeiro_lado + terceiro_lado)
    var condicao_3 = (primeiro_lado - segundo_lado) < terceiro_lado && terceiro_lado < (primeiro_lado + segundo_lado)

    return condicao_1 === true && condicao_2 === true && condicao_3 === true 
        
}

function tipo_triangulo(primeiro_lado, segundo_lado, terceiro_lado){
    if (primeiro_lado === segundo_lado && primeiro_lado === terceiro_lado){
        return 'equilátero'

    }else if((primeiro_lado === segundo_lado && primeiro_lado !== terceiro_lado) || (primeiro_lado === terceiro_lado && primeiro_lado !== segundo_lado) || (segundo_lado === terceiro_lado && segundo_lado !== primeiro_lado)){
        return 'isósceles'  

    }else if(primeiro_lado !== segundo_lado && primeiro_lado !== terceiro_lado && segundo_lado !== terceiro_lado){
        return 'escaleno'
    }
}
main()