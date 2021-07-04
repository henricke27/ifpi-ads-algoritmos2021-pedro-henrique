const prompt = require('prompt-sync')()

function main(){
    let texto = prompt('Escreva um texto: ')
    let caractere = ''

    if(limite_caracteres(texto) <= 20){
        for (let i = 0; i < texto.length; i++){
            caractere = texto[i]
            console.log(caractere)
        }
    }else{
        console.log('Ultrapassou o limite de caracteres!')
    }
    function limite_caracteres(texto) {
        let caractere = ''
        let contador_caracteres = 0

        for (let i = 0; i < texto.length; i++){
            caractere = texto[i]
            if(caractere.charCodeAt(0) === 32){
                continue
            }else{
                contador_caracteres++
            }
        }
        return contador_caracteres
    }
}
main()