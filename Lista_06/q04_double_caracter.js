const prompt = require('prompt-sync')()

function main(){
    let frase = prompt('Escreva uma frase: ')
    let nova_frase = ''
    let caractere = ''

    for (let i = 0; i < frase.length; i++){
        caractere = frase[i]

        nova_frase = nova_frase + caractere + caractere
    }
    console.log(nova_frase)
}
main()