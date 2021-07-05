const prompt = require('prompt-sync')()

function main(){
    let decimal = prompt('Digite um número: ')
    let binario = conversao(decimal)

    console.log(binario)

    function conversao(decimal){
        let bit = 0
        let quociente = Number(decimal)
        let valor_invetido = ''
        let binario = ''

        while(quociente >= 1){
            bit = (quociente % 2)
            valor_invetido = valor_invetido + String(bit)
            quociente = parseInt(Number(quociente) / 2)
        }
        for(let i = valor_invetido.length - 1; i >= 0; i--){
            binario = binario + valor_invetido[i]
        }
        return Number(binario)
    }
}
main()