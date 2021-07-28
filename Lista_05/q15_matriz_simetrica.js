const { nova_matriz_quadrada } = require("./matriz_utils")

const prompt = require("prompt-sync")()

function main() {
    const ordem = Number(prompt('Ordem da matriz quadrada: '))

    const matriz = nova_matriz_quadrada(ordem)

    for(let i = 0; i < ordem; i++){
        for(let j = 0; j < ordem; j++){
            matriz[i][j]= Number(prompt(`Linha ${i} | Coluna ${j}: `))
        }
    }
    let matriz_simetrica = verificar_simetria(matriz, ordem)

    if(matriz_simetrica){
        console.log("A matriz é simétrica!")
    }else{
        console.log("A matriz não é simétrica!")
    }
    
}
function verificar_simetria(matriz, ordem){
    for(let i = 0; i < ordem; i++){
        for(let j = 0; j < ordem; j++){
            if(matriz[i][j] !== matriz[j][i]){
                return false
            }
        }
    } 
    return true
}
main()