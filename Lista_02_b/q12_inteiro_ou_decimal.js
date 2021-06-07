var input = require('prompt-sync')()

function main() {
    var numero = Number(input('Digite um número: '))
    
    var numero_formatado = numero - parseInt(numero) 

    if(numero_formatado === 0){
        console.log('Número inteiro')
    }else{
        console.log('Número decimal')
    }
}
main()