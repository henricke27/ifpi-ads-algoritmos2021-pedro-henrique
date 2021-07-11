const { nova_matriz_quadrada } = require('./matriz_utils')

const prompt = require('prompt-sync')({
    sigint: true
})

function main() {
    const ordem = Number(prompt('Ordem da matriz quadrada: '))

    let matriz = nova_matriz_quadrada(ordem) 
    for(let i = 0 ; i < ordem; i++){
        for(let j = 0; j < ordem; j++){
            matriz[i][j] = Number(prompt(`Linha ${i} | Coluna ${j}: `))
        }
    }

    let soma_positivos = somar_positivos(ordem, matriz) 
    let soma_negativos = somar_negativos(ordem, matriz)

    console.log(`Soma dos valores positivos: ${soma_positivos}`)
    console.log(`Soma dos valores negativos: ${soma_negativos}`)
}

function somar_positivos(ordem, matriz){
    let somatorio = 0
    let numero = 0

    for(let i = 0 ; i < ordem; i++){
        for(let j = 0; j < ordem; j++){
           numero = matriz[i][j]
           if(numero > 0){
            somatorio = somatorio + numero
           }
        }
    }
    return somatorio
}

function somar_negativos(ordem, matriz){
    let somatorio = 0
    let numero = 0

    for(let i = 0 ; i < ordem; i++){
        for(let j = 0; j < ordem; j++){
            numero = matriz[i][j]
            if(numero < 0){
                somatorio = somatorio + numero
            }
        }
    }
    return somatorio
}
main()