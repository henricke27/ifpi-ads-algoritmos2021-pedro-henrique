const prompt = require('prompt-sync')()

function main(){
    const elementos = Number(prompt('Quantidade de elementos: '))

    let vetor_a = Array(elementos)
    let vetor_b = Array(elementos)

    for (let i = 0; i < elementos; i++){
        vetor_a[i] = Number(prompt(`Valor de  ${i}: `))
    }
    let j = vetor_b.length - 1

    for (item of vetor_a){
        vetor_b[j] = item
        j--
    }

    console.log(vetor_a)
    console.log(vetor_b)
}
main()