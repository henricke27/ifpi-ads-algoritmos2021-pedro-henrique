var input = require('prompt-sync')()

function main() {
    var numero = Number(input('Digite um número inteiro menor que mil: '))

    var centena = parseInt(numero / 100) 
    var dezena = parseInt((numero % 100) / 10)
    var unidade = numero % 10 

    if(numero >= 100){
        console.log(`O número ${numero} possui: ${centena} centena${plural(centena)}, ${dezena} dezena${plural(dezena)} e ${unidade} unidade${plural(unidade)} `)
    }else if(numero > 10){
        console.log(`O número ${numero} possui: ${dezena} dezena${plural(dezena)} e ${unidade} unidade${plural(unidade)} `)
    }else {
        console.log(`O número ${numero} possui: ${unidade} unidade${plural(unidade)} `)
    }

}

function plural(valor) {
    if(valor > 1){
        return 's'
    }else{
        return ''
    }
}
main()