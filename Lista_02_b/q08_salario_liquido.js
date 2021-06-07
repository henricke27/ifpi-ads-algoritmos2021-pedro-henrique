var input = require('prompt-sync')()

function main() {
    var valor_da_hora = Number(input('Digite o valor recebido por hora: R$'))
    var horas_trabalhadas = Number(input('Digite a quantidade de horas trabalhadas no mês: '))
    var salario_bruto = valor_da_hora * horas_trabalhadas


    var percentual_ir = calcular_percentual_imposto_renda(salario_bruto)
    var imposto_de_renda = (salario_bruto) * (percentual_ir/100)
    var desconto_fgts = (salario_bruto) * (11/100)
    var desconto_inss = (salario_bruto) * (10/100)

    var desconto_total = desconto_inss + imposto_de_renda
    var salario_liquido = salario_bruto - desconto_total

    console.log(`Salário bruto: R$${salario_bruto.toFixed(2)}`)
    console.log(`(-) IR (${percentual_ir}%): R$${imposto_de_renda.toFixed(2)}`)
    console.log(`(-) INSS (10%): R$${desconto_inss.toFixed(2)}`)
    console.log(`FGTS (11%): R$${desconto_fgts.toFixed(2)}`)
    console.log(`Total de descontos: R$${desconto_total.toFixed(2)}`)
    console.log(`Salário líquido: R$${salario_liquido.toFixed(2)}`)
} 

function calcular_percentual_imposto_renda(salario) {
    if(salario <= 900){
        return 0
    }else if(salario <= 1500){
        return 5
    }else if(salario <= 2500){
        return 10
    }else if(salario > 2500 ){
        return 20
    }
}
main()