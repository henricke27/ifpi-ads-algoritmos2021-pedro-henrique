const prompt = require('prompt-sync')()

function main(){
    let texto = prompt('Escreva um texto: ')
    let texto_extraido = substr(texto, 10, 20)

    console.log(texto_extraido)

    function substr(texto, posicao, caracteres) {
        let alocacao = Number(posicao)
        let simbolos = Number(caracteres)
        let texto_extraido = ''
        let caractere = ''

        for(let i = alocacao; i < (alocacao + simbolos); i++){
            caractere = texto[i]
            texto_extraido = texto_extraido + caractere
        }
        return texto_extraido
    }
}
main()