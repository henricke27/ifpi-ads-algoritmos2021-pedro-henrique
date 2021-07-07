const prompt = require('prompt-sync')()

function main(){
    const elementos = Number(prompt('Quantidade de elementos: '))

    let vetor = Array(elementos)

    for(let i = 0; i < elementos; i++){
        vetor[i] = Number(prompt(`Digite um valor para a posição ${i}: `))
    }

    let maior = maior_elemento(vetor)
    let menor = menor_elemento(vetor)

    console.log(`Maior: ${maior[0]} | Posição: ${maior[1]}`)
    console.log(`Menor: ${menor[0]} | Posição: ${menor[1]}`)
}
function maior_elemento(vetor) {
    let valor
    let maior = novo_vetor(2, 0)

    for(let i = 0; i < vetor.length; i++){
        valor = vetor[i]
        for(let k = 0; k < vetor.length; k++){
            if(vetor[k] > maior[0]){
                maior[0] = vetor[k]
                maior[1] = k
            }
        }
    }
    return maior
}
function menor_elemento(vetor) {
    let valor
    let menor = novo_vetor(2, vetor[vetor.length - 1])

    for(let i = 0; i < vetor.length; i++){
        valor = vetor[i]
        for(let k = 0; k < vetor.length; k++){
            if(vetor[k] < menor[0]){
                menor[0] = vetor[k]
                menor[1] = k
            }else{
                continue
            }
        }
    }
    return menor
}
function novo_vetor(tamanho, padrao) {
    let vetor = new Array()

    for(let i = 0; i < tamanho; i++){
        vetor.push(padrao)
    }
    return vetor
}
main()