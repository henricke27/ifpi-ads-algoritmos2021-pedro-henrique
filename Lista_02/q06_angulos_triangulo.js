var input = require('prompt-sync')()

function main() {
    var angulo_1 = Number(input('Informe o valor do primeiro ângulo: '))
    var angulo_2 = Number(input('Informe o valor do segundo ângulo: '))
    var angulo_3 = Number(input('Informe o valor do terceiro ângulo: '))

    angulo_triangulo(angulo_1, angulo_2, angulo_3)

}
function angulo_triangulo(angulo_1, angulo_2, angulo_3) {
    if((angulo_1 + angulo_2 + angulo_3) === 180 ){
        if(angulo_1 < 90 && angulo_2 < 90 && angulo_3 < 90){
            return console.log(`É um triângulo acutângulo.`)

        }else if(angulo_1 === 90 || angulo_2 === 90 || angulo_3 === 90){
            return console.log(`É um triângulo retângulo.`)

        }else if(angulo_1 > 90 || angulo_2 > 90 || angulo_3 > 90){
            return console.log(`É um triângulo obtusângulo.`)
        }
    } else{
        return console.log(`Essas medidas não formam um triângulo.`)
    }
}
main()