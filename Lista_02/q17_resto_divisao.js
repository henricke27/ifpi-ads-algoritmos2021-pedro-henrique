var input = require('prompt-sync')()

function main(){
    var primeiro_valor = Number(input('Digite o primeiro valor: '))
    var segundo_valor = Number(input('Digite o segundo valor: '))
    var resto_divisao = primeiro_valor % segundo_valor
    
    if(resto_divisao === 1){
        var condicao_1 = primeiro_valor + segundo_valor + resto_divisao 
        console.log(`A soma dos valores mais o resto da divisão é ${condicao_1}`)

    }else if(resto_divisao === 2){
        if(primeiro_valor % 2 === 0){
            console.log(`${primeiro_valor} é par.`)
        }else{
            console.log(`${primeiro_valor} é ímpar.`)
        }
        if(segundo_valor % 2 === 0){
            console.log(`${segundo_valor} é par.`)
        }else{
            console.log(`${segundo_valor} é ímpar`)
        }

    }else if(resto_divisao === 3){
        var condicao_3 = (primeiro_valor + segundo_valor) * primeiro_valor
        console.log(`A multiplicação da soma dos valores com o primeiro valor é ${condicao_3}`)

    }else if(resto_divisao === 4){
        var condicao_4 = (primeiro_valor + segundo_valor) / segundo_valor
        console.Log(`A divisão da soma dos valores com o segundo valor é ${condicao_4}`)

    }else {
        var quadrado_primeiro = primeiro_valor ** 2
        var quadrado_segundo = segundo_valor ** 2

        console.log(`O quadrado do primeiro valor é ${quadrado_primeiro}`)
        console.log(`O quadrado do segundo valor é ${quadrado_segundo}`)
    }

}

main()