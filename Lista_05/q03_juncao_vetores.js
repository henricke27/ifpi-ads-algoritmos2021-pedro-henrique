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
    let vetor_c = somar_vetores(vetor_a, vetor_b)
    
    console.log(vetor_a)
    console.log(vetor_b)
    console.log(vetor_c)
}
function somar_vetores(vetor_a, vetor_b) {
    let vetor_c = new Array()

    for(let i = 0; i < vetor_a.length; i++){
        vetor_c.push(vetor_a[i])
    }
    for(let i = 0; i < vetor_b.length; i++){
        vetor_c.push(vetor_b[i])
    }
    return vetor_c
}
main()