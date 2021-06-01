var input = require('prompt-sync')()

function main() {
    var altura = Number(input('Informe a altura(m): '))
    var peso = Number(input('Informe o peso(kg): '))
    var imc = peso / altura ** 2

    console.log(`O IMC é ${imc.toFixed(2)}`)
    if(imc < 25){
        console.log('Classificado como peso normal')
    }else if(imc >= 25 && imc < 30){
        console.log('Classificado como obeso)')
    }else if(imc > 30){
        console.log('Classificado como obesidade morbidá')
    }

}

main()