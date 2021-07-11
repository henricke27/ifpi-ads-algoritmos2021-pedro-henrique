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

    let linha_maior = verificar_linha_maior(ordem, matriz) 
    let linha_menor = verificar_linha_menor(ordem, matriz)

    console.log(`Linha que possui o maior somatório: ${linha_maior} `)
    console.log(`Linha que possui o menor somatório: ${linha_menor}`)

}
function verificar_linha_maior(ordem, matriz){
    let somatorio = 0
    let linha = 0

    for(let i = 0 ; i < ordem; i++){
        let acumulador = 0

        for(let j = 0; j < ordem; j++){
            acumulador = acumulador + matriz[i][j]
            if(acumulador > somatorio){
                somatorio = acumulador
                linha = i
            }
        }
    }
    return linha
}

function verificar_linha_menor(ordem, matriz){
    let somatorio = 0
    let linha = 0

    for(let i = 0 ; i < ordem; i++){
        let acumulador = 0

        for(let j = 0; j < ordem; j++){
            acumulador = acumulador + matriz[i][j]
            if(acumulador < somatorio){
                somatorio = acumulador
                linha = i
            }
            if(somatorio === 0){
                somatorio = acumulador
            }
        }
    }
    return linha
}
main()