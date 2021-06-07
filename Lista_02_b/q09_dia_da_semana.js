var input = require('prompt-sync')()

function main() {
    var numero_do_dia = Number(input('Digite um número correspondente ao dia da semana: '))

    var dia_da_semana = calcular_dia_da_semana_string(numero_do_dia)

    if(numero_do_dia > 0 && numero_do_dia <= 7){
        console.log(`${dia_da_semana}`)
    }else{
        console.log(`Valor inválido`)
    }
}    
function calcular_dia_da_semana_string(valor) {
    if(valor === 1){
        return 'Domingo'
    }else if(valor === 2){
        return 'Segunda'
    }else if(valor === 3){
        return 'Terça'
    }else if(valor === 4){
        return 'Quarta'
    }else if(valor === 5){
        return 'Quinta'
    }else if(valor === 6){
        return 'Sexta'
    }else if(valor === 7){
        return 'Sábado'
    }
}
main()