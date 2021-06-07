var input = require('prompt-sync')()

function main() {
    var quantidade_morangos = input('Quantidade de morangos em (kg): ')
    var quantidade_macas = input('Quantidade de maçãs em (kg): ')
    
    var quantidade_total = quantidade_morangos + quantidade_macas
    var valor_total = calcular_valor_total(quantidade_morangos, quantidade_macas)
    
    var desconto = calcular_desconto(quantidade_total, valor_total)

    var pagamento_final = valor_total - desconto

    console.log(`A compra custou R$${pagamento_final.toFixed(2)}`)

}
function calcular_valor_total(morango, maca) {
    
    var valor_morango = 0
    var valor_maca = 0

    if(morango <= 5){
        valor_morango = 2.5 * morango  
    }else{
        valor_morango = 2.2 * morango
    }

    if(maca <= 5){
        valor_maca = 1.8 * maca
    }else{
        valor_maca = 1.5 * maca
    }
    return valor_morango + valor_maca

}
function calcular_desconto(quantidade, valor) {
    if(quantidade > 8 || valor > 25){
        return valor * (10/100)
    }else{
        return 0
    }
}
main()