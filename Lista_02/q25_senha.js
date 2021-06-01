var input = require('prompt-sync')()

function main() {
    var usuario_senha = Number(input('Digite a senha: '))
    
    if(verificar_senha(usuario_senha)){
        console.log('Permissão concedida.')
    }else{
        console.log('Acesso negado.')
    }
}

function verificar_senha(senha) {
    return senha === 1234
}

main()