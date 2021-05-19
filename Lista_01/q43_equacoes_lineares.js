    var input = require('prompt-sync')()
    
    console.log('Modelo da equação 1: ax + by = c')
    console.log('Modelo da equação 2: dx + ey = f')
    
    //Entrada

    var number_a = Number(input('Digite o valor de "a": ')) 
    var number_b = Number(input('Digite o valor de "b": '))
    var number_c = Number(input('Digite o valor de "c": '))
    
    var number_d = Number(input('Digite o valor de "d": '))
    var number_e = Number(input('Digite o valor de "e": ')) 
    var number_f = Number(input('Digite o valor de "f": ')) 

    //Processamento 

    var numerador_x = (number_c * number_e) - (number_b * number_f) 
    var denominador_x = (number_a * number_e) - (number_b * number_d)
    var numerador_y = (number_a * number_f) - (number_c * number_d)
    var denominador_y = (number_a * number_e) - (number_b * number_d)

    var variavel_x = numerador_x / denominador_x
    var variavel_y = numerador_y / denominador_y

    //Saída

    console.log(`O valor das variáveis "x" e "y" é respectivamente igual a: ${variavel_x.toFixed(2)} e ${variavel_y.toFixed(2)}`)
