const prompt = require('prompt-sync')()

function main() {
    const valor_compra = Number(prompt('Informe o valor da compra: R$'))
    const prazo = Number(prompt('Deseja receber o dinheiro em quantos dias? '))
    const forma_pagamento = prompt('Forma de pagamento (A VISTA | A PRAZO):  ')
    let parcelas = 0

    if(forma_pagamento === 'a prazo'){
        parcelas = Number(prompt('Quantidade de parcelas:  '))
    }

    let taxa_gateway = taxa_cobrada_gateway(valor_compra, prazo, forma_pagamento, parcelas)
    let valor_liquido = valor_compra + taxa_gateway
   
    console.log(`Valor da compra: R$${valor_compra}`)
    console.log(`Forma de pagamento: ${forma_pagamento}`)
    console.log(`Taxa cobrada pelo Gateway: R$${taxa_gateway.toFixed(2)}`)
    console.log(`Valor líquido a ser recebido pelo logista: R$${valor_liquido.toFixed(2)}`)
    console.log(`${prazo} dias para receber o dinheiro`)
}
function taxa_cobrada_gateway(valor, prazo, pagamento, parcelas){
    let taxa = 0

    if(prazo === 31){
        if(pagamento === 'a vista'){
            taxa = (valor * (2.99 / 100) + 0.4)
        }else{
            taxa = (valor * (3.49 / 100) + 0.4) + (parcelas / 100)
        }
    }else if(prazo === 14){
        if(pagamento === 'a vista'){
            taxa = (valor * (3.49 / 100) + 0.4)
        }else{
            taxa = (valor * (3.99 / 100) + 0.4) + (parcelas / 100)
        }
    }else{
        if(pagamento === 'a vista'){
            taxa = (valor * (4.39 / 100) + 0.4)
        }else{
            taxa = (valor * (4.99 / 100) + 0.4) + (parcelas / 100)
        }
    }
    return taxa
}
main()