const prompt = require('prompt-sync')()

function main() {
    const valor_investido = Number(prompt('Informe o valor que será investido mensalmente: '))
    const taxa_juros = Number(prompt('Informe a taxa de juros que será aplicada mensalmente: '))

    let valor_inicial = valor_investido

    let novo_investimento = ''

    let saldo_final = 0

    let contador_mes = 0

    while(true){

        if(contador_mes === 12){
            console.log(`Saldo final: R$${saldo_final.toFixed(2)}`)

            novo_investimento = prompt('Deseja processar um novo investimento? ')

            if(novo_investimento === 'sim'){
                contador_mes = 0
            }else{
                break
            }
        }

        saldo_final = saldo_final + (valor_inicial * (1 + (taxa_juros / 100)) ** contador_mes)


        contador_mes++
    }

    console.log(`Saldo final: R$${saldo_final.toFixed(2)}`)
}
main()