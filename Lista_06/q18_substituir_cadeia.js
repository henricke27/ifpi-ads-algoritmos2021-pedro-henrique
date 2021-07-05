const prompt = require('prompt-sync')()

function main(){
    let texto = prompt('Escreva um texto: ')
    let posicao_inicial = Number(prompt('Posição do primeiro caractere: '))
    let posicao_final = Number(prompt('Posição do último caractere: '))
    let nova_frase = prompt('Digite a nova frase: ')

    let texto_reescrito = novo_texto(texto, nova_frase, posicao_inicial, posicao_final)

    console.log(texto_reescrito)

    function novo_texto(texto, fatia, inicio, fim ) {
        let caractere = ''
        let texto_alterado = ''

        for(let i = 0; i < texto.length; i++){
            caractere = texto[i]

            if(i === inicio){
                texto_alterado = texto_alterado + fatia
                i = fim
            }else{
                texto_alterado = texto_alterado + caractere
            }
        }
        return texto_alterado
    }
}
main()