var input = require('prompt-sync')()

function main() {
    var nome_vendedor = input('Informe o nome do vendedor: ')
    var valor_total_vendas = Number(input('Informe o valor total de vendas: R$'))
    var salario_fixo = 1100


    var primeira_faixa_comissao = calcular_primeira_faixa(valor_total_vendas)
    var segunda_faixa_comissao = calcular_segunda_faixa(valor_total_vendas)
    var terceira_faixa_comissao = calcular_terceira_faixa(valor_total_vendas)

    var comissao = primeira_faixa_comissao + segunda_faixa_comissao + terceira_faixa_comissao
    var salario_total = salario_fixo + comissao

    console.log(`As faixas de comissao de ${nome_vendedor} foram:`)
    console.log(`Primeira faixa: R$${primeira_faixa_comissao.toFixed(2)}`)
    console.log(`Segunda faixa: R%${segunda_faixa_comissao.toFixed(2)}`)
    console.log(`Terceira faixa: R$${terceira_faixa_comissao.toFixed(2)}`)

    console.log(`O valor total da comissao foi de: R$${comissao}`)
    console.log(`O salário final é de: R$${salario_total}`)

}
function calcular_primeira_faixa(valor) {
    if(valor >= 5000){
        return (valor - 5000) * (5/100)
    }else{
        return 0
    }
 
}
function calcular_segunda_faixa(valor) {
    if(valor >= 10000){
        return ((valor - 5000) * (5/100)) + ((valor - 10000) * (10/100))
    }else{
        return 0
    }
}
function calcular_terceira_faixa(valor) {
    if(valor >= 20000){
        return ((valor) * (20/100))
    }else{
        return 0
    }
}
main()