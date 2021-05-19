    var input_number = require('prompt-sync')()

    //Entrada

    var numero = Number(input_number('Registre um número inteiro com 3 dígitos: '))

    //Processamento
      
    var converter_centena = (numero - (numero % 100)) / 100     // valor que será convertido a unidade.
    var converter_dezena = (numero - (numero % 10)) - (numero - (numero % 100 ))      // dezena representada em unidades
    var converter_unidade = (numero % 10) * 100    // valor que será convertido em centena.

    var digitos_inverso = (converter_centena) + (converter_dezena) + (converter_unidade)

    //Saída 

    console.log(`O inverso dos dígitos é: ${digitos_inverso}`)
