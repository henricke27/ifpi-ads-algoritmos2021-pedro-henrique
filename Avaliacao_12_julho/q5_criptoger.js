const prompt = require('prompt-sync')()

function main() {
    const frase = prompt('Digite um frase: ')

    let nova_frase = criptografar(frase)

    console.log(nova_frase)
}

function criptografar(frase) {
    let frase_pt1 = ''
    let frase_pt2 = ''
    let caractere = ''

    for(let i = 0; i < parseInt(frase.length / 2); i++){
        caractere = frase[i]
        frase_pt1 = frase_pt1 + caractere
    }
    for(let j = parseInt((frase.length) / 2); j < frase.length; j++){
        caractere = frase[j]
        frase_pt2 = frase_pt2 + caractere
    }
    
    let frase_invertida = inverter_frase(frase_pt1, frase_pt2)
    let vogais_alteradas = transformar_vogais(frase_invertida)
    let numeros_alterados = transformar_numeros(vogais_alteradas)
    let consoantes_alteradas = transformar_consoantes(numeros_alterados)

    return consoantes_alteradas
}

function inverter_frase(frase_1, frase_2) {
    let frase_1_inv = ''
    let frase_2_inv = ''
    let caractere = ''

    for(let i = frase_1.length - 1; i >= 0; i--){
        caractere = frase_1[i]
        frase_1_inv = frase_1_inv + caractere
    }
    for(let j = frase_2.length - 1; j >= 0; j--){
        caractere = frase_2[j]
        frase_2_inv = frase_2_inv + caractere
    }
    return frase_1_inv + frase_2_inv
}

function transformar_vogais(frase) {
    let nova_frase = ''
    let caractere = ''

    for(let i = 0; i < frase.length; i++){
        caractere = frase[i]
        const codigo = caractere.charCodeAt(0)

        if(codigo === 65 || codigo === 97){
            nova_frase = nova_frase + '1'
        }else if(codigo === 69 || codigo === 101){
            nova_frase = nova_frase + '2'
        }else if(codigo === 73 || codigo === 105){
            nova_frase = nova_frase + '3'
        }else if(codigo === 79 || codigo === 111){
            nova_frase = nova_frase + '4'
        }else if(codigo === 85 || codigo === 117){
            nova_frase = nova_frase + '5'
        }else{
            nova_frase = nova_frase + caractere
        }
    }
    return nova_frase
}

function transformar_numeros(frase) {
    let nova_frase = ''
    let caractere = ''

    for(let i = 0; i < frase.length; i++){
        caractere = frase[i]
        if(caractere > 0){
            for(let j = 0; j < caractere; j++){
                nova_frase = nova_frase + '*'
            }
        }else{
            nova_frase = nova_frase + caractere
        }
    }
    return nova_frase
}

function transformar_consoantes(frase) {
    let nova_frase = ''
    let caractere = ''
    
    for(let i = 0; i < frase.length; i++){
        caractere = frase[i]
        const codigo = caractere.charCodeAt(0)
        
        if(caractere === '*'){
            nova_frase = nova_frase + caractere
        }else{
            nova_frase = nova_frase + String.fromCharCode(codigo + 10)
        }
    }
    return nova_frase
}
main()