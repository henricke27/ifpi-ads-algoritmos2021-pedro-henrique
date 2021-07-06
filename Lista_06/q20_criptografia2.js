const prompt = require('prompt-sync')()

function main(){
    let frase = prompt('Digite uma frase: ')
    let nova_frase = criptografar(frase)
    let vogais = armazenar_vogais(frase)
    let frase_original = descriptografar(frase, vogais)

    console.log(nova_frase)

    let pergunta = prompt('Descriptografar? ')

    if(pergunta === 'sim'){
        console.log(frase_original)
    }else{
        console.log("Fim!")
    }
}

function criptografar(frase) {
    let caractere = ''
    let frase_criptografada = ''

    for(let i = 0; i < frase.length; i++){
        caractere = frase[i]
        const codigo = caractere.charCodeAt(0)

        if(codigo === 65 || codigo === 97 || codigo === 69 || codigo === 101 || codigo === 73 || codigo === 105 || codigo === 79 || codigo === 111 || codigo === 85 || codigo === 117){
            continue
        }else{
            frase_criptografada = frase_criptografada + caractere
        }
    }
    return frase_criptografada
}
function armazenar_vogais(frase) {
    let caractere = ''
    let armazenar = ''

    for(let i = 0; i < frase.length; i++){
        caractere = frase[i]
        const codigo = caractere.charCodeAt(0)

        if(codigo === 65 || codigo === 97 || codigo === 69 || codigo === 101 || codigo === 73 || codigo === 105 || codigo === 79 || codigo === 111 || codigo === 85 || codigo === 117){
            armazenar = armazenar + caractere
        }else{
            armazenar = armazenar + ' '
        }
    }
    return armazenar
}
function descriptografar(frase, vogais) {
    let caractere1 = ''
    let caractere2 = ''
    let frase_original = ''
    
    for(let i = 0; i < vogais.length; i++){
        caractere1 = vogais[i]
        caractere2 = frase[i]

        const codigo = caractere1.charCodeAt(0)

        if(codigo === 65 || codigo === 97 || codigo === 69 || codigo === 101 || codigo === 73 || codigo === 105 || codigo === 79 || codigo === 111 || codigo === 85 || codigo === 117){
            frase_original = frase_original + caractere1
        }else{
            frase_original = frase_original + caractere2
        }
    }
    return frase_original
}
main()