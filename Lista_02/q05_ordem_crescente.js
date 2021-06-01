var input = require('prompt-sync')()

function main() {
    var numero_1 = Number(input('Informe o primeiro número: '))
    var numero_2 = Number(input('Informe o segundo número: '))
    var numero_3 = Number(input('Informe o terceiro número: '))

    ordem_crescente(numero_1, numero_2, numero_3)

}

function ordem_crescente(valor_1, valor_2, valor_3) {
    if ((valor_1 > valor_2) && (valor_2 > valor_3)) {
        return console.log(`Ordem crescente: ${valor_3} - ${valor_2} - ${valor_1} `)
    }
    else if ((valor_2 > valor_1) && (valor_1 > valor_3)) {
        return console.log(`Ordem crescente: ${valor_3} - ${valor_1} - ${valor_2} `)
    }
    else if ((valor_2 > valor_3) && (valor_3 > valor_1)) {
        return console.log(`Ordem crescente: ${valor_1} - ${valor_3} - ${valor_2} `)
    }
    else if ((valor_3 > valor_1) && (valor_1 > valor_2)) {
        return console.log(`Ordem crescente: ${valor_2} - ${valor_1} - ${valor_3} `)
    }
    else if ((valor_3 > valor_2) && (valor_2 > valor_1)) {
        return console.log(`Ordem crescente: ${valor_1} - ${valor_2} - ${valor_3} `)
    }
}

main()