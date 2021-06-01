var input = require('prompt-sync')()

function main(){
    console.log('Opções: 1 - Adiçao')
    console.log('Opções: 2 - Subtração')
    console.log('Opções: 3 - Multiplicação')
    console.log('Opções: 4 - Divisão')

    var opcoes = Number(input('Digite o número da opção desejada: '))
    var primeiro_valor = Number(input('Informe o primeiro valor: '))
    var segundo_valor = Number(input('Informe o segundo valor: '))

    var resultado = tipo_operacao(opcoes, primeiro_valor, segundo_valor)
    if(tipo_operacao(opcoes, primeiro_valor, segundo_valor)){
        console.log(`O resultado é ${resultado.toFixed(2)}`)

    }else{
        console.log('Selecione apenas uma das opções descritas.')
    }
}
function tipo_operacao(opcao, primeiro, segundo) {
    if(opcao === 1){
        return primeiro + segundo

    }else if(opcao === 2){
        return primeiro - segundo

    }else if(opcao === 3){
        return primeiro * segundo

    }else if(opcao === 4){
        return primeiro / segundo
    }
    else {
        return false
    }
}
main()