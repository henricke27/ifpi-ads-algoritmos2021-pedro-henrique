const { nova_matriz_quadrada } = require('./matriz_utils.js')

const prompt = require('prompt-sync')({
    sigint: true
})

function main(){
    const ordem = Number(prompt('Ordem da matriz quadrade: '))

    const matriz = nova_matriz_quadrada(ordem)

    for (let linha = 0; linha < ordem; linha++){
        for (let coluna = 0; coluna < ordem; coluna++){
            matriz[linha][coluna] = Number(prompt(`Valor L:${linha}-C:${coluna} >> `))
        }
    }

    let linha_maior = 0
    let coluna_maior = 0
    let linha_menor = 0
    let coluna_menor = 0
    for (let i = 0; i < ordem; i++){
        for (let j = 0; j < ordem; j++){
            if (matriz[i][j] > matriz[linha_maior][coluna_maior]){
                linha_maior = i
                coluna_maior = j
            }else if (matriz[i][j] < matriz[linha_menor][coluna_menor]){
                linha_menor = i
                coluna_menor = j
            }
        }
    }

    console.log(matriz)
    console.log('Maior elemento: ', matriz[linha_maior][coluna_maior])
    console.log(`Maior: linha (${linha_maior}) e coluna(${coluna_maior})`)
    console.log('Menor elemento: ', matriz[linha_menor][coluna_menor])
    console.log(`Menor: linha (${linha_menor}) e coluna(${coluna_menor})`)
}

main()