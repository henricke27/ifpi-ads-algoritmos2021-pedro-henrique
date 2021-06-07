var input = require('prompt-sync')()

function main() {
    var tipo_carne = (input('Informe o tipo de carne: ')).toLowerCase()
    var quantidade_carne = Number(input('Informe a quantidade da carne(kg): '))
    var cartao = input('Pagar com o cartão Tabajara? ').toLowerCase()

    var preco_total = calcular_preco_total(tipo_carne, quantidade_carne)
    var desconto = calcular_desconto(cartao, preco_total)
    var preco_final = preco_total - desconto

    console.log(`Tipo de carne: ${tipo_carne}`)
    console.log(`Quantidade de carne: ${quantidade_carne} kg`)
    console.log(`Preço total: R$${preco_total.toFixed(2)}`)
    console.log(`Pagamento com o cartão Tabajara: ${cartao}`)
    console.log(`Valor do desconto: R$${desconto.toFixed(2)}`)
    console.log(`Valor a ser pago: R$${preco_final.toFixed(2)}`)
}

function calcular_preco_total(carne, quantidade) {

    if(carne === 'file'){
        if(quantidade <= 5){
            return quantidade * 4.9
        }else{
            return quantidade * 5.8
        }
    }else if(carne === 'alcatra'){
        if(quantidade <= 5){
            return quantidade * 5.9
        }else{
            return quantidade * 6.8
        }
    }else if(carne === 'picanha'){
        if(quantidade <= 5){
            return quantidade * 6.9
        }else{
            return quantidade * 7.8
        }
    }
}

function calcular_desconto(cartao, valor) {
    
    if(cartao === 'sim'){
        return valor * (5/100)
    }else{
        return 0
    }
}
main()