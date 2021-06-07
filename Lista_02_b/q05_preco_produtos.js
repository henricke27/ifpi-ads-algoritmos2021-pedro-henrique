var input = require('prompt-sync')()

function main() {
    var produto_1 = Number(input('Digite o preço do primeira produto: R$'))
    var produto_2 = Number(input('Digite o preço do segundo produto: R$'))
    var produto_3 = Number(input('Digite o preço do terceiro produto: R$'))

    var produto_mais_barato = menor_preco(produto_1, produto_2, produto_3)

    if(produto_mais_barato === produto_1){
        console.log('O primeiro produto é a melhor opção de custo')
    }else if(produto_mais_barato === produto_2){
        console.log('O segundo produto é a melhor opção de custo')
    }else if(produto_mais_barato === produto_3){
        console.log('O terceiro produto é a melhor opção de custo')
    }else if(produto_1 === produto_2 && produto_2 === produto_3){
        console.log('Os preços são iguais')
    }else if(produto_3 === produto_2 && produto_1 !== produto_3){
        console.log('O primeiro produto é a melhor opção de custo')
    }else if(produto_1 === produto_3 && produto_2 !== produto_3){
        console.log('O segundo produto é a melhor opção de custo')
    }else if(produto_1 === produto_2 && produto_3 !== produto_2){
        console.log('O terceiro produto é a melhor opção de custo')
    }
}
function menor_preco(preco_1 , preco_2, preco_3){
    var retorna_1 = (preco_3 > preco_2 && preco_2 > preco_1) || (preco_2 > preco_3 && preco_3 > preco_1) 
    var retorna_2 = (preco_1 > preco_3 && preco_3 > preco_2) || (preco_3 > preco_1 && preco_1 > preco_2)
    var retorna_3 = (preco_1 > preco_2 && preco_2 > preco_3) || (preco_2 > preco_1 && preco_1 > preco_3)

    if(retorna_1){
        return preco_1
    }else if(retorna_2){
        return preco_2
    }else if(retorna_3){
        return preco_3
    }
}

main()