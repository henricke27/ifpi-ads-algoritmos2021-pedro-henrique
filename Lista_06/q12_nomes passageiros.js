const prompt = require('prompt-sync')()

function main(){
    let nome = prompt('Nome do passageiro: ')
    let primeiro_nome = ''
    let ultimo_nome = ''
    let caractere1 = ''
    let caractere2 = ''
    
    for (let i = 0; caractere1.charCodeAt(0) !== 32; i++){
        caractere1 = nome[i]
        primeiro_nome = primeiro_nome + caractere1
    }

    for (let i = nome.length - 1; caractere2.charCodeAt(0) !== 32; i--){
        caractere2 = nome[i]
        ultimo_nome = ultimo_nome + caractere2
        
    }
    console.log(`${ultimo_nome.split('').reverse().join('')}/${primeiro_nome}`)
}
main()