const prompt = require('prompt-sync')()

function main() {
    let valor_emprestimo = Number(prompt('Informe o valor do emprestimo: R$'))
    let valor_pagar = Number(prompt('Informe a quantidade que será paga diariamente: R$'))

    let pagar = 0

    let dias = 0

    while(valor_emprestimo > 0){
        pagar = prompt('Deseja pagar? ')

        if(pagar === 'sim'){
            valor_emprestimo = valor_emprestimo - valor_pagar
        }else{
            valor_emprestimo = valor_emprestimo + (valor_emprestimo * 0.085)
        }
    
        dias++
    }
    console.log(`A conclusão do pagamento foi feito em ${dias} dias`)
}
main()