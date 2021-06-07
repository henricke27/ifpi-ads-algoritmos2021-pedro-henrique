var input = require('prompt-sync')()

function main() {
    var salario_atual = Number(input('Informe o salário atual: R$'))
    var percentual = calcular_aumento_percentual(salario_atual)

    var aumento = salario_atual * (percentual/100)
    var novo_salario = salario_atual + aumento

    console.log(`O salário antes do reajuste era R$${salario_atual.toFixed(2)}`)
    console.log(`O percentual de aumento aplicado foi de ${percentual}%`)
    console.log(`O valor do aumento aplicado pelo percentual é de R$${aumento.toFixed(2)}`)
    console.log(`O novo salário após o reajuste é R$${novo_salario.toFixed(2)}`)
}
function calcular_aumento_percentual(salario){
    if(salario <= 280){
        return 20
    }else if(salario <= 700){
        return 15
    }else if(salario <= 1500){
        return 10
    }else{
        return 5
    }
}

main()