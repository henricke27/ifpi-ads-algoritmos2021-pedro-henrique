const prompt = require('prompt-sync')()

function main(){
    let vetor_a = Array(20)
    let i = 0

    for(item of vetor_a){
        vetor_a[i] = i + 1
        i++
    }

    let posicao_a = 0
    let posicao_b = 19
    let valor_s = 0

    for(let i = 0; i < 10; i++){
        valor_s = valor_s + (vetor_a[posicao_a] - vetor_a[posicao_b]) ** 2
        posicao_a++
        posicao_b--
    }

    console.log(vetor_a)
    console.log(valor_s)
}
main()