var input = require('prompt-sync')()

function main() {
    var letra = (input('Informe uma letra: ')).toUpperCase()
    
    if(eh_vogal(letra)){
        console.log(`${letra} é uma vogal`)

    }else if(letra >= 0 || letra <= 0){
        console.log('Valor inválido')

    }else{
        console.log(`${letra} é uma consoante`)
    }
}
function eh_vogal(letra) {
    return letra === 'A' || letra === 'E' || letra === 'I' || letra === 'O' || letra === 'U'
}
main()