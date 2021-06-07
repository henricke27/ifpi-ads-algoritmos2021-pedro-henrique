var input = require('prompt-sync')()

function main() {
    var sexo = input('Informe uma letra com a inicial do sexo: ')
    
    if(sexo === 'M' || sexo === 'm'){
        console.log('Sexo masculino.')

    }else if(sexo === 'F' || sexo === 'f'){
        console.log('Sexo feminino.')

    }else{
        console.log('Sexo inválido.')
    }
}
main()