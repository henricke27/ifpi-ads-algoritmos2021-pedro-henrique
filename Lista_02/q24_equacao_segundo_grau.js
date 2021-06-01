var input = require('prompt-sync')()

function main() {
    var coeficiente_a = Number(input('Informe o coeficiente "a": '))
    var coeficiente_b = Number(input('Informe o coeficiente "b": '))
    var coeficiente_c = Number(input('Informe o coeficiente "c": '))

    var validar_coeficiente_a = coeficiente_a !== 0

    if(validar_coeficiente_a){
        var raiz_1 = calcular_raiz_1(coeficiente_a, coeficiente_b, coeficiente_c)
        var raiz_2 = calcular_raiz_2(coeficiente_a, coeficiente_b, coeficiente_c)
        console.log(`As raizes da equação é ${raiz_1.toFixed(2)} e ${raiz_2.toFixed(2)}`)

    }else{
        console.log('Digite os valores corretos!')
    }
}

function calcular_delta(coef_a, coef_b, coef_c){
    return (coef_b ** 2) - 4 * coef_a * coef_c
}

function calcular_raiz_1(coef_a, coef_b, coef_c) {

    return (-(coef_b) + Math.sqrt(calcular_delta(coef_a, coef_b, coef_c))) / 2 * coef_a
    
}
function calcular_raiz_2(coef_a, coef_b, coef_c) {
    return (-(coef_b) - Math.sqrt(calcular_delta(coef_a, coef_b, coef_c))) / 2 * coef_a
}
main()