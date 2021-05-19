    var input = require('prompt-sync')()

    //Entrada

    var numerador_1 = Number(input('Digite o numerador da primeira fração: '))
    var denominador_1 = Number(input('Digite o denominador da primeira fração: '))
    var numerador_2 = Number(input('Digite o numerador da segunda fração: '))
    var denominador_2 = Number(input('Digite o denominador da segunda fração: '))

    //Processamento

    var denominador_resultado = denominador_1 * denominador_2
    var calculo_1 = numerador_1 * denominador_2
    var calculo_2 = numerador_2 * denominador_1
    var numerador_resultado = calculo_1 + calculo_2


    //Saída

    console.log(`A soma das frações corresponde ao valor: ${numerador_resultado}/${denominador_resultado}`)
    