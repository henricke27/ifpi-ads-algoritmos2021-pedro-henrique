const prompt = require('prompt-sync')()

function main(){
    let binario = Array(8)

    for (let i = 0; i < binario.length; i++){
        binario[i] = Number(prompt(`Valor do bit na posição ${i}: `))
    }

    let decimal = converter_decimal(binario)
    let hexadecimal = converter_hexadecimal(binario)

    console.log(`Decimal: ${decimal}`)
    console.log(`Hexadecimal: ${hexadecimal}`)
}

function converter_decimal(valor) {
    let decimal = 0
    let expoente = 0
    let i = 0

    for(bit in valor){
        decimal = decimal + (valor[i] * (2 ** expoente))
        expoente++
        i++
    }
    return String(decimal)
}
function converter_hexadecimal(valor) {
    let primeiro_nibble = 0
    let segundo_nibble = 0

    let expoente_1 = 0
    let expoente_2 = 0

    for(let i = 0; i < 4; i++){
        primeiro_nibble = primeiro_nibble + (valor[i] * (2 ** expoente_1))
        expoente_1++
    }
    for(let i = 4; i < 8; i++){
        segundo_nibble = segundo_nibble + (valor[i] * (2 ** expoente_2))
        expoente_2++
    }
    let hexadecimal = verificar_simbolo(String(segundo_nibble)) + verificar_simbolo(String(primeiro_nibble))
    return hexadecimal
}
function verificar_simbolo(nibble) {
    if(nibble === '10'){
        return 'A'
    }else if(nibble === '11'){
        return 'B'
    }else if(nibble === '12'){
        return 'C'
    }else if(nibble === '13'){
        return 'D'
    }else if(nibble === '14'){
        return 'E'
    }else if(nibble === '15'){
        return 'F'
    }else{
        return nibble
    }
}
main()