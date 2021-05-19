    var input = require('prompt-sync')()
    
    //Entrada

    var anos_fumo = Number(input('Digite o número de anos de fumante: '))
    var cigarros_dia = Number(input('Digite o número de cigarros fumados por dia: '))
    var valor_carteira = Number(input('Digite o preço da carteira de cigarro: '))

    //Processamento
    var dias_fumo = anos_fumo * 365
    var cigarros_fumados = cigarros_dia * dias_fumo
    var carteiras_consumidas = cigarros_fumados / 20

        //Se carteiras_consumidas der um float, significa que o fumante pagou uma carteira que ainda está sendo consumida.  

    if (cigarros_fumados % 20 == 0 ) {
        var dinheiro_gasto = carteiras_consumidas * valor_carteira 
    } else {
        var dinheiro_gasto = (parseInt(carteiras_consumidas) * valor_carteira) + valor_carteira
    }

    //Saída

    console.log(`O total de dinheiro gasto com carteiras de cigarros foi: R$${dinheiro_gasto.toFixed(2)}`)
