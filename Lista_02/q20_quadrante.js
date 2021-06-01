var input = require('prompt-sync')()

function main() {  
    var angulo = Number(input('Informe o ângulo: '))
    
    if(angulo > 0 && angulo < 90){
        console.log(`O ângulo de ${angulo}° percence ao primeiro quadrante`)
    }else if(angulo > 90 && angulo < 180 ){
        console.log(`O ângulo de ${angulo}° percence ao segundo quadrante`)
    }else if(angulo > 180 && angulo < 270){
        console.log(`O ângulo de ${angulo}° percence ao terceiro quadrante`)
    }else if(angulo > 270 && angulo < 360){
        console.log(`O ângulo de ${angulo}° percence ao quarto quadrante`)

    }else{
        console.log(`Informação inválida`)
    }
}
main()