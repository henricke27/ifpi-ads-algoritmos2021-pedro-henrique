const prompt = require('prompt-sync')()

function main(){
    let salario = 1
    let novo_salario = 1
    let somatorio_salario_atual = 0
    let somatorio_salario_reajustado = 0
    let diferenca_somatorio = 0

    while(salario !== 0){
        salario = Number(prompt('Informe o salario: '))
        novo_salario = reajuste_salarial(salario)

        somatorio_salario_atual = somatorio_salario_atual + salario
        somatorio_salario_reajustado = somatorio_salario_reajustado + novo_salario

        console.log(`Novo salario: de R$${salario.toFixed(2)} para R$${novo_salario.toFixed(2)}`)

    }
    diferenca_somatorio = Math.abs(somatorio_salario_reajustado - somatorio_salario_atual)

    console.log(`A soma dos salários atuais é: R$${somatorio_salario_atual.toFixed(2)}`)
    console.log(`A soma dos salários reajustados é: R$${somatorio_salario_reajustado.toFixed(2)}`)
    console.log(`A diferença entre os somatórios é: R$${diferenca_somatorio.toFixed(2)}`)
}

function reajuste_salarial(valor){
    if(valor < 3000){
        return valor + (valor * (25/100))
    }else if(valor < 6000){
        return valor + (valor * (20/100))
    }else if(valor < 10000){
        return valor + (valor * (15/100))
    }else{
        return valor + (valor * (10/100))
    }
}

main()