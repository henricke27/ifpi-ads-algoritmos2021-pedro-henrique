const prompt = require('prompt-sync')()

function main(){
    let frase = prompt('Escreva uma frase: ')
    let palavra = ''
    let caractere = ''

    for (let i = 0; i < frase.length; i++){
        caractere = frase[i]
        
        if(caractere.charCodeAt(0) === 32){
            console.log(palavra)
            palavra = ''
        }else{
            palavra = palavra + caractere
        }
    }
    console.log(palavra)
}
main()