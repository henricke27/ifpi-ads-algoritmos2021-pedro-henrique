const { nova_matriz_quadrada } = require('./matriz_utils')

const prompt = require('prompt-sync')()

function main(){
    const ordem = Number(prompt('Quantidade de elementos: '))

    let matriz = nova_matriz_quadrada(ordem)

    for (let linha = 0; linha < ordem; linha++){
        for (let coluna = 0; coluna < ordem; coluna++){
            matriz[linha][coluna] = Number(prompt(`Valor L:${linha}-C:${coluna} >> `))
        }
    }

    let matriz_transposta = transposta(ordem, matriz)

    console.log(matriz)
    console.log('**** MATRIZ TRANSPOSTA ****')
    console.log(matriz_transposta)
}
function transposta(ordem, matriz){
    let matriz_transposta = nova_matriz_quadrada(ordem)


    for (let i = 0; i < ordem; i++){
        for (let j = 0; j < ordem; j++){
            matriz_transposta[i][j] = matriz[j][i]

        }
    }
    return matriz_transposta
}
main()