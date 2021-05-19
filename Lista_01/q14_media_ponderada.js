    var input = require('prompt-sync')()
    
    //Entrada

    var nota_1 = Number(input('Digite sua primeira nota: '))
    var nota_2 = Number(input('Digite sua segunda nota: '))
    var nota_3 = Number(input('Digite sua terceira nota: '))

    var peso_1 = Number(input('Informe o peso da primeira nota: '))
    var peso_2 = Number(input('Informe o peso da segunda nota: '))
    var peso_3 = Number(input('Informe o peso da terceira nota: '))

    //Processamento 

    var numerador = (nota_1 * peso_1) + (nota_2 * peso_2) + (nota_3 * peso_3)
    var denominador = (peso_1) + (peso_2) + (peso_3)

    var media_ponderada = numerador / denominador

    //Saída

    console.log(`A média ponderada das notas citadas corresponde a: ${media_ponderada.toFixed(2)}`)
