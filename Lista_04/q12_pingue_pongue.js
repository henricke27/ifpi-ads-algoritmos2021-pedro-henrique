const prompt = require('prompt-sync')()

function main() {
    let ponto_jogador = 0

    let qntd_pts_a = 0
    let qntd_pts_b = 0

    let vencedor = ''

    while(true){
        let ponto_jogador = Number(prompt('Ponto para o jogador: '))

        if(ponto_jogador === 1){
            qntd_pts_a++
        }else{
            qntd_pts_b++
        }

        if(qntd_pts_a === 21 && qntd_pts_a - qntd_pts_b >= 2){
            vencedor = 'A'
            break
        }else if(qntd_pts_b === 21 && qntd_pts_b - qntd_pts_a >= 2){
            vencedor = 'B'
            break
        }

        if(qntd_pts_a > 21 && (qntd_pts_a - qntd_pts_b >= 2)){
            vencedor = 'A'
            break
        }else if(qntd_pts_b > 21 && (qntd_pts_b - qntd_pts_a >= 2)){
            vencedor = 'B'
            break
        }
    }
    console.log(`O vencedor foi o jogador ${vencedor}`)
}
main()