const prompt = require('prompt-sync')()

function main(){
    let palavra = prompt('Digite uma palavra: ')
    let inverso_palavra = ''
    let caractere = ''

    for (let i = palavra.length - 1; i >= 0; i--){
        caractere = palavra[i]
        inverso_palavra = inverso_palavra + caractere
    }

    if(palavra === inverso_palavra){
        console.log(`${palavra} é um palíndromo!`)
    }else{
        console.log(`${palavra} não é um palíndromo!`)
    }
}
main()