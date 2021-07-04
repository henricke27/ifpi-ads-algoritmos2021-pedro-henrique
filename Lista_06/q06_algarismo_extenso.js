const prompt = require('prompt-sync')()

function main(){
    let frase = prompt('Escreva uma frase: ')
    let caractere = ''
    let nova_frase = ''

    for (let i = 0; i < frase.length; i++){
        caractere = frase[i]
        if(eh_numero(caractere)){
            nova_frase = nova_frase + numero_extenso(Number(caractere))
        }else{
            nova_frase = nova_frase + caractere
        }
    } 
    console.log(nova_frase)
    
    function eh_numero(caractere){
        let codigo = caractere.charCodeAt(0)
        if(codigo === 48 || codigo === 49 ||codigo === 50 ||codigo === 51 ||codigo === 52 ||codigo === 53 || codigo === 54 || codigo === 55 || codigo === 56 || codigo === 57){
            return true
        }else{
            return false
        }
    }

    function numero_extenso(numero) {
        let string = String(numero)

        if(string.length === 1){
            if(numero === 1){
                return 'um'
            }else if(numero === 2){
                return 'dois'
            }else if(numero === 3){
                return 'três'
            }else if(numero === 4){
                return 'quatro'
            }else if(numero === 5){
                return 'cinco'
            }else if(numero === 6){
                return 'seis'
            }else if(numero === 7){
                return 'sete'
            }else if(numero === 8){
                return 'oito'
            }else {
                return 'nove'
            }
        }
    }
}
main()