const prompt = require('prompt-sync')()

function main(){
    const elementos = Number(prompt('Quantidade de elementos: '))

    let vetor_a = Array(elementos)
    let vetor_b = new Array()

    for (let i = 0; i < elementos; i++){
        vetor_a[i] = Number(prompt(`Valor de  ${i}: `))

        if(i % 2 === 0){
            vetor_b[i] = 0
        }else{
            vetor_b[i] = 1
        }
    }

    console.log(vetor_a)
    console.log(vetor_b)
}
main()