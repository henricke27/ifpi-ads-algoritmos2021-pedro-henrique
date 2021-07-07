const prompt = require('prompt-sync')()

function main(){
    const elementos = Number(prompt('Informe a quantidade de elementos: '))

    let vetor_a = Array(elementos)

    for (let i = 0; i < elementos; i++){
        vetor_a[i] = Number(prompt(`Elemento da posição ${i}: `))
    }
    
    if(contem_igual(vetor_a)){
        console.log('Exitem valores repetidos!')
    }else{
        console.log('Não exitem valores repetidos!')
    }
    
    function contem_igual(vetor) {
        let valor 
        let contador = 0
    
        for (let i = 0; i < vetor.length; i++){
            valor = vetor[i]
            contador = 0
            for (let r = 0; r < vetor.length; r++){
                if(valor === vetor[r]){
                    contador++
                }  
            }
            if(contador > 1){
                return true
            }
        }
        return false
    }
}
main()