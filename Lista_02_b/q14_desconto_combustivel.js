var input = require('prompt-sync')()

function main() {
    var litros = Number(input('informe a quantidade de litros: '))
    var tipo_combustivel = (input('Informe a inicial do tipo de combustível: ')).toLowerCase()
   
    var valor_pagar = calcular_valor(tipo_combustivel, litros)

    if(tipo_combustivel === 'a' || tipo_combustivel === 'g'){
        console.log(`Valor a ser pago: R$${valor_pagar.toFixed(2)}`)
    }else{
        console.log('Digite apenas "A" para álcool" ou "G" para gasolina')
    }
}
function calcular_valor(combustivel, litros) {

    if(combustivel === 'a'){
        if(litros <= 20){
            return litros * ((2.5) * (97/100))
        }else{
            return litros * ((2.5) * (95/100))
        }
    }else{
        if(litros <= 20){
            return litros * ((1.9) * (96/100))
        }else{
            return litros * ((1.9) * (94/100))
        }
    }
}
main()