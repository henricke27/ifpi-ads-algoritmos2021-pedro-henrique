const prompt = require('prompt-sync')()

function main() {
    const numero = Number(prompt('Digite um numero: '))

    let numero_bin = numero

    let binario = 0
    let casa_bin = 10000000
    let acumulador_bin = 0

    let numero_hex = numero

    let hexadecimal = 0
    let casa_hex = 100
    let acumulador_hex = ''

    while(numero_bin > 0){
        binario = numero_bin % 2
        acumulador_bin = acumulador_bin + (binario / casa_bin)
        
        casa_bin = casa_bin / 10
        numero_bin = parseInt(numero_bin / 2)
    }

    while(numero_hex > 0){
        hexadecimal = numero_hex % 16

        if(hexadecimal >= 10){
            hexadecimal = verificar_valor(hexadecimal)
        }
        
        acumulador_hex = acumulador_hex + hexadecimal.toString()

        casa_hex = casa_hex / 10
        numero_hex = parseInt(numero_hex / 16)
    }
    acumulador_bin = acumulador_bin * 10000000

    console.log(`O número em binário é: ${acumulador_bin.toFixed(0)}`)
    console.log(`O número em hexadecimal é: ${inverter(acumulador_hex)}`)
}

function verificar_valor(valor){
    if(valor === 10){
        return valor = 'A'
    }else if(valor === 11){
        return valor = 'B'
    }else if(valor === 12){
        return valor = 'C'
    }else if(valor === 13){
        return valor = 'D'
    }else if(valor === 14){
        return valor = 'E'
    }else{
        return valor = 'F'
    } 
}

function inverter(valor){
    return valor.split('').reverse().join('')
}
main()