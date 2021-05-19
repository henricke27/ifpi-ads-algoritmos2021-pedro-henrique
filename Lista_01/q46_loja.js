    var input = require('prompt-sync')()

    //Entrada

    var produto = Number(input('Preço do produto: R$'))

    //Processamento

    var parcela = parseInt(produto / 3)
    var resto_parcela = produto % 3

    var entrada = parcela + resto_parcela

    //Saída

    if (entrada == parcela) {
    console.log(`Deverá ser pago uma entrada e duas parcelas iguais a R$${entrada}`)
    } else {
        console.log(`Deverá ser pago uma entrada de R$${entrada} e duas prestações iguais a R$${parcela}`)
    }
 