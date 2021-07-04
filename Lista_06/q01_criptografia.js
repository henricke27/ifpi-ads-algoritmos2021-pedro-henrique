const prompt = require('prompt-sync')()

function main(){
    const frase = prompt('Frase: ')
    
    let nova_frase = ''
    for (let i = frase.length - 1; i >= 0; i--){
        nova_frase = nova_frase + frase[i]
        
    }    
    console.log(nova_frase)
    let frase_final = ''
    let caractere = ''
    for (let i = 0; i < nova_frase.length; i++){
        caractere = nova_frase[i]
        if(eh_consoante(caractere)){    
            frase_final = frase_final + '#'
        }else{
            frase_final = frase_final + caractere
        }
    }
    console.log(frase_final)

    function eh_consoante(caractere) {
        if(eh_letra(caractere) && !eh_vogal(caractere)){
            return true
        }else{
            return false
        }
    }

    function eh_letra(caractere) {
        const codigo = caractere.charCodeAt(0)
        if(codigo >= 65 && codigo <= 90 || codigo >= 97 && codigo <= 122){
            return true 
        }else{
            return false
        }
    }

    function eh_vogal(caractere) {
        if(eh_letra(caractere)){
            const codigo = caractere.charCodeAt(0)
            if(codigo === 65 || codigo === 97 || codigo === 69 || codigo === 101 || codigo === 73 || codigo === 105 || codigo === 79 || codigo === 111 || codigo === 85 || codigo === 117){
                return true
            }else{
                return false
            }
        }else{
            return false
        }
    }
}
main()