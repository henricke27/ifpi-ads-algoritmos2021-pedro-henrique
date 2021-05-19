    var input = require('prompt-sync')()

    //Entrada

    var anos = Number(input('Informe a idade: '))
    var meses = Number(input('Informe os meses de vida(período de um ano): '))
    var dias = Number(input('Informe os dias de vida(período de um mês): '))

    //Processamento 

    var anos_convertidos = anos * 365
    var meses_convertidos = meses * 30

    var idade_em_dias = (anos_convertidos) + (meses_convertidos) + (dias) 
    
    //Saída

    console.log(`A idade da pessoa expressa em dias é: ${idade_em_dias}`)
