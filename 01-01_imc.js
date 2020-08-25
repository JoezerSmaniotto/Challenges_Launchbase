//          Cálculo de IMC
const nome = 'Wendell'
const peso = 67
const altura = 1.78
const imc = peso/(altura*altura)

if (imc >= 25){
    console.log(`${nome} você está acima do peso ideal.`)
} else if (imc >= 18.5 && imc < 25){
    console.log(`${nome} seu peso está dentro do ideal.`)
} else{
    console.log(`${nome} você está abaixo do peso ideal.`)
}