const prompt = require('prompt-sync')()

function main() {
    const razao = Number(prompt('Digite a razão da PA: '))
    const primeiro_termo = Number(prompt('Digite o primeiro termo da PA: '))

    const limite = 1000

    let acumulador = primeiro_termo

    while(acumulador < limite){
        console.log('Valores: '+ acumulador)
        
        acumulador = acumulador + razao

        if(acumulador > limite){
            break
        }
        
    }
}
main()