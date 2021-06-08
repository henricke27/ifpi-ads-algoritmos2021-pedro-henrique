var input = require('prompt-sync')()

function main() {
    var media_casos_14_dias =  Number(input('Informe a média de casos de covid há 14 dias: '))
    var media_casos_hoje = Number(input('Informe a média de casos de covid hoje: '))

    var variacao_dados = ((media_casos_hoje / media_casos_14_dias) - 1) * 100
    var classificacao_conceito = verificar_conceito(variacao_dados)

    console.log(`A variação dos casos de covid foi de ${variacao_dados.toFixed(2)}%`)
    console.log(`A situação é classificada como: ${classificacao_conceito}`)
}

function verificar_conceito(valor) {
    if(valor > 15){
        return 'Em alta'
    }else if(valor < 0){
        return 'Em queda'
    }else{
        return 'Em estabilidade'
    }

}
main()