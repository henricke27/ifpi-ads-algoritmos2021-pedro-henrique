const prompt = require('prompt-sync')()

function main(){
    const elementos_a = Number(prompt('Quantidade de elementos de A: '))
    const elementos_b = Number(prompt('Quantidade de elementos de B: '))

    let vetor_a = Array(elementos_a)
    let vetor_b = Array(elementos_b)
    
    for(let i = 0; i < vetor_a.length; i++){
        vetor_a[i] = prompt(`Elemento de A na posição ${i}: `)
    }
    for(let i = 0; i < vetor_b.length; i++){
        vetor_b[i] = prompt(`Elemento de B na posição ${i}: `)
    }
    let uniao = uniao_vetores(vetor_a, vetor_b)
    let intersecao = intersecao_vetores(vetor_a, vetor_b)

    console.log(uniao)
    console.log(intersecao)

}
function uniao_vetores(vetor_a, vetor_b) {
    let uniao = new Array()

    for(let i = 0; i < vetor_a.length; i++){
        uniao.push(vetor_a[i])
    }
    for(let i = 0; i < vetor_b.length; i++){
        uniao.push(vetor_b[i])
    }
    return uniao
}
function intersecao_vetores(vetor_a, vetor_b) {
    let intersecao = new Array()
    let valor 

    for(let i = 0; i < vetor_a.length; i++){
        valor = vetor_a[i]
        for(let j = 0; j < vetor_a.length; j++){
            if(valor === vetor_b[j]){
                intersecao.push(vetor_b[j])
            }
        }
    }
    return intersecao
}
main()