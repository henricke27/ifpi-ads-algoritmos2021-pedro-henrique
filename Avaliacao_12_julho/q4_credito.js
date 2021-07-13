const prompt = require('prompt-sync')()

function main() {
    const emprestimo = Number(prompt('Digite o valor do empréstimo: '))
    const parcela = Number(prompt('Valor da parcela: '))

    let saldo_devedor = emprestimo
    let juros_mes = 0
    let meses_quitacao = 0

    while(saldo_devedor > 0){
        juros_mes = atualizar_juros_mes(saldo_devedor)
        saldo_anterior = saldo_devedor
        saldo_devedor = atualizar_saldo_devedor(saldo_devedor, parcela, juros_mes)

        console.log(`Juros do mês: R$${juros_mes.toFixed(2)}`)
        console.log(`Parcela do mês fixa: R$${parcela}`)
        console.log(`Saldo anterior: R$${saldo_anterior.toFixed(2)}`)
        console.log(`Novo saldo: R$${saldo_devedor.toFixed(2)}`)
        console.log('')

        meses_quitacao++
    }
    console.log(`São necessários ${meses_quitacao} meses para a conclusão do pagamento!`)
}
function atualizar_saldo_devedor(saldo, parcela, juros) {
    let valor = saldo

    valor = valor + juros
    valor = valor - parcela

    if(valor < 0){
        valor = 0
    }
    return valor
}

function atualizar_juros_mes(saldo) {
    return saldo * (1 / 100)
}
main()