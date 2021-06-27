const prompt = require('prompt-sync')()

function main() {
    let nome_produto = ''
    let preco_produto = 0
    let qntd_produto = 0

    let valor_total = 0
    let desconto = 0

    while(!(nome_produto === 'FIM')){
        nome_produto = prompt('Produto comprado: ').toUpperCase()

        preco_produto = Number(prompt('Preço do produto: R$'))
        qntd_produto = Number(prompt('Quantidade comprada: '))
        

        desconto = calcular_desconto(preco_produto, qntd_produto)

        valor_total = (preco_produto * qntd_produto) - desconto

        console.log(`Produto comprado: ${nome_produto.toUpperCase()}`)
        console.log(`Valor total a ser pago: R$${valor_total}`)

    }
}

function calcular_desconto(preco, quantidade) {
    let valor = preco * quantidade

    if(quantidade <= 10){
        return 0
    }else if(quantidade <= 20){
        return valor * (10/100)
    }else if(quantidade <= 50){
        return valor * (20/100)
    }else{
        return valor * (25/100)
    }
}
main()