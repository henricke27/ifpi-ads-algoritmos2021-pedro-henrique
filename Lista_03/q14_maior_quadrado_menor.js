const prompt = require('prompt-sync')()

function main() {
    let numero = Number(prompt('Digite um número: '))
    let quadrado = 0
    let quadrado_menor = 0

    for(let i = 0 ; numero >= quadrado ; i++ ){
        quadrado = i**2

        if(quadrado > numero){
            i--
            quadrado_menor = i**2
        }else if(quadrado === numero){
            quadrado_menor = quadrado
        }
    }
    console.log(quadrado_menor)

}
main()