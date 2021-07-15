const prompt = require('prompt-sync')()

function main() {
    const elementos = Number(prompt('Digite a quantidade de elementos: '))
    let vetor = new Array()

    for(let i = 0; i < elementos; i++){
        vetor[i] = Number(prompt('Valor numérico: '))
    }

    let media = calcular_media(vetor)
    let maior_valor = verificar_maior_valor(vetor)
    let menor_valor = verificar_menor_valor(vetor)
    let quantidade_positivos = verificar_quantidade_positivos(vetor)
    let quantidade_negativos = verificar_quantidade_negativos(vetor)

    console.log('')
    console.log(`Média: ${media}`)
    console.log(`Maior valor: ${maior_valor}`)
    console.log(`Menor valor: ${menor_valor}`)
    console.log(`Quantidade de positivos: ${quantidade_positivos}`)
    console.log(`Quantidade de negativos: ${quantidade_negativos}`)
    
    if(verificar_repeticao(vetor)){
        console.log('Existem valores repetidos!')
    }else{
        console.log('Não exisem valores repetidos!')
    }
}   

function calcular_media(vetor) {
    let valor = 0
    let somatorio = 0
    let denominador = 1
    let media = 0

    for(let i = 0; i < vetor.length; i++){
        valor = vetor[i]

        somatorio = somatorio + valor
        media = somatorio / denominador

        denominador++
    }
    return media
}
function verificar_maior_valor(vetor) {
    let valor = 0
    let maior_valor = vetor[0]

    for(let i = 0; i < vetor.length; i++){
        valor = vetor[i]
        if(valor > maior_valor){
            maior_valor = valor
        }
    }
    return maior_valor
}
function verificar_menor_valor(vetor) {
    let valor = 0
    let menor_valor = vetor[0]

    for(let i = 0; i < vetor.length; i++){
        valor = vetor[i]
        if(valor < menor_valor){
            menor_valor = valor
        }
    }
    return menor_valor
}
function verificar_quantidade_positivos(vetor) {
    let valor = 0
    let acumulador = 0

    for(let i = 0; i < vetor.length; i++){
        valor = vetor[i]
        if(valor > 0){
            acumulador++
        }
    }
    return acumulador
}
function verificar_quantidade_negativos(vetor) {
    let valor = 0
    let acumulador = 0

    for(let i = 0; i < vetor.length; i++){
        valor = vetor[i]
        if(valor < 0){
            acumulador++
        }
    }
    return acumulador
}
function verificar_repeticao(vetor) {
    let valor = 0
    let contador = 0

    for(let i = 0; i < vetor.length || contador < 1; i++){
        valor = vetor[i]
        contador = 0
        for(let j = 0; j < vetor.length; j++){
            if(valor === vetor[j]){
                contador++
            }
        }
    }
    if(contador > 1){
        return true
    }else{
        return false
    }
}
main()