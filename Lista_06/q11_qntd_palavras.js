const prompt = require('prompt-sync')()

function main(){
    let texto = prompt('Escreva uma texto: ')
    let palavra = 1
    let caractere = ''

    for (let i = 0; i < texto.length; i++){
        caractere = texto[i]
        
        if(caractere.charCodeAt(0) === 32){
            palavra++
       }
    }
    console.log(`Quantidade de palavras: ${palavra}`)
}
main()