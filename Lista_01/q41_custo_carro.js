    var input = require('prompt-sync')()

    //Entrada

    var custo_fabrica = Number(input('Informe o custo de fábrica do carro: '))

    //Processamento

    var porcentagem_distribuidor = custo_fabrica * 0.28
    var porcentagem_impostos = custo_fabrica * 0.45

    var custo_consumidor = (custo_fabrica) + (porcentagem_distribuidor) + (porcentagem_impostos)

    //Saída

    console.log(`O valor do custo ao cosumidor será de: R$${custo_consumidor.toFixed(2)}`)