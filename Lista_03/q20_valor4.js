const prompt = require('prompt-sync')()

function main() {
    let valor = Number(prompt('Último termo do denominador: '))
    let acumulador = 0

    for(let i = 1; i <= valor; i++){

        if(i % 2 !== 0){
            acumulador = acumulador + (1 / i)  
        }else{
            acumulador = acumulador - (1 / i)
        }

    }

    console.log(`Resultado: ${acumulador}`)

}
main()