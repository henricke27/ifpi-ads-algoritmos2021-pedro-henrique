var input = require('prompt-sync')()

function main() {
    var consumo_atual = Number(input('Digite o consumo do mês atual (KWh): '))
    var consumo_anterior = Number(input('Digite o consumo do mês anterior (KWh): '))

    var consumo = consumo_atual - consumo_anterior
    var bandeira = 'Amarela 2'

    var taxa_bandeira = calcular_taxa_extra(consumo)
    var tarifa = calcular_tarifa(consumo)
    var taxa_iluminacao_publica = calcular_imposto_iluminacao_publica(tarifa)

    var imposto_icms = tarifa * (25/100)
    var imposto_pis_confis = tarifa * (15/100)

    var valor_faturado = tarifa + taxa_iluminacao_publica + taxa_bandeira + imposto_icms + imposto_pis_confis

    console.log(`Consumo: ${consumo} KWh`)
    console.log(`Valor faturado: R$${valor_faturado.toFixed(2)}`)
    console.log(`Bandeira: R$${taxa_bandeira.toFixed(2)} (${bandeira})`)
    console.log(`ICMS: R$${imposto_icms.toFixed(2)}`)
    console.log(`PIS/CONFIS: R$${imposto_pis_confis.toFixed(2)}`)
    console.log(`Taxa de iluminação: R$${taxa_iluminacao_publica.toFixed(2)}`)

}

function calcular_tarifa(valor) {
    if(valor <= 30){
        return 0
    }else if(valor < 100){
        return valor * 0.59
    }else{
        return valor * 0.75
    }
}

function calcular_taxa_extra(valor) {
    if(valor >= 100){
        return valor * 8
    }else{
        return 0
    }
}

function calcular_imposto_iluminacao_publica(valor) {
    if(valor > 80 ){
        return valor * (6/100)
    }else{
        return 0
    }
}
main()