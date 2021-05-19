    var input = require('prompt-sync')()

    //Entrada

    var raio_esfera = Number(input('Digite o valor do raio da esfera: '))

    //Processamento
 
    var pi = 3.14
    var volume = (4 * pi * raio_esfera) / 3

    //Saída

    console.log(`O volume da esfera é: ${volume.toFixed(2)}`)


