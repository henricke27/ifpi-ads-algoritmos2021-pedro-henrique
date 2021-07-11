const { nova_matriz_quadrada } = require('./matriz_utils')

const prompt = require('prompt-sync')()

function main() {
    const ordem = Number(prompt('Ordem da matriz: '))

    let matriz = nova_matriz_quadrada(ordem)

    for(let i = 0; i < ordem; i++){
        for(let j = 0; j < ordem; j++){
            matriz[i][j] = Number(prompt(`Linha ${i} - Coluna${j}: `))

        }
    }
    
    let diagonal_principal = somar_diagonal_principal(matriz, ordem)
    let diagonal_secundaria = somar_diagonal_secundaria(matriz, ordem)
    let elementos_restantes = somar_elementos_restantes(matriz, ordem)

    console.log(diagonal_principal)
    console.log(diagonal_secundaria)
    console.log(elementos_restantes)
}

function somar_diagonal_principal(matriz, ordem) {
    let soma_elementos = 0
    let coluna = 0

    for(let linha = 0; linha < ordem; linha++){
        soma_elementos = soma_elementos + matriz[linha][coluna]
        coluna++
    }
    return soma_elementos
}

function somar_diagonal_secundaria(matriz, ordem) {
    let soma_elementos = 0
    let coluna = ordem - 1

    for(let linha = 0; linha < ordem; linha++){
        soma_elementos = soma_elementos + matriz[linha][coluna]
        coluna--
    }
    return soma_elementos
}

function somar_elementos_restantes(matriz, ordem) {
    let soma = 0

    for(let linha = 0; linha < ordem; linha++){
        let i = 0 
        let j = ordem - 1
        for(let coluna = ordem - 1; coluna >= 0; coluna--){
            if(i === linha && j === coluna){
                 
            }else if(linha === coluna){

            }else{
                soma = soma + matriz[linha][coluna]
            }
            i++
            j--
        }
    }
    return soma
}
main()