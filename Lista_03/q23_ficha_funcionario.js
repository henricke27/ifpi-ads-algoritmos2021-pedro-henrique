const prompt = require('prompt-sync')()

function main() {
    let codigo = 0
    let horas = 0
    let dependentes = 0
    
    for(let salario_liquido = 0 ;codigo !== -1 ;  ){
        codigo = Number(prompt('Código: '))
        horas = Number(prompt('Horas trabalhadas: '))
        dependentes = Number(prompt('N° de dependentes: '))

        let salario_bruto = (12 * horas) + (40 * dependentes)
        let inss = salario_bruto * (8.5 / 100)
        let ir = salario_bruto * (5 / 100)

        salario_liquido = salario_bruto - (inss + ir)

        console.log(`Código: ${codigo}`)
        console.log(`Horas trabalhadas: ${horas}`)
        console.log(`N° de dependentes: ${dependentes}`)

        console.log(`Valor descontado do INSS: R$${inss.toFixed(2)}`)
        console.log(`Valor descontado do IR: R$${ir.toFixed(2)}`)
        console.log(`Salário líquido: R$${salario_liquido.toFixed(2)}`)

    }

}
main()