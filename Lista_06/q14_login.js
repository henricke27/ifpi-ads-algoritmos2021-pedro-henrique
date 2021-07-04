const prompt = require('prompt-sync')()
//O login é composto pelas iniciais do primeiro e último nome do usuário, e por um número natural aletório.
function main(){
    let usuario = ''
    let iniciais = ''
    let numero = 0

    while (usuario !== '-1'){
        usuario = prompt('Nome do usuário: ')
        if(usuario !== '-1'){
            iniciais = gerar_login(usuario)
            numero = Math.floor(Math.random() * 10)
            inicias_sb = sobrenome(usuario)
        }
        if(usuario !== '-1'){
            console.log(`Login: ${iniciais}${inicias_sb}${numero}`)
        }
    }

    function gerar_login(usuario) {
        let caractere = ''
        let login = ''

        for(let i = 0; i < 3; i++){
            caractere = usuario[i]    
            login = login + caractere
        }
        return login
    }
    function sobrenome(usuario) {
        let caractere = ''
        let sb_invertido = ''
        let inicias_sb = ''

        for (let i = usuario.length - 1; caractere.charCodeAt(0) !== 32; i--){
            caractere = usuario[i]
            if(caractere.charCodeAt(0) !== 32){
                sb_invertido = sb_invertido + caractere
            }
        }
        let sobre_nome = sb_invertido.split('').reverse().join('')

        for(let i = 0; i < 3; i++){
            caractere = sobre_nome[i]
            inicias_sb = inicias_sb + caractere
        }
        return inicias_sb
    }
}
main()