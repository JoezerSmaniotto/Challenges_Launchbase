//         Cálculo de aposentadoria
const nome = 'Wendell'
const sexo = 'M'
const idade = 50
const contribuicao = 45

// o tempo minimo de contribuicao de homens=35 e mulheres=30
// a soma de idade com o tempo de contribuicao do homem precisa ser de no
//minimo 95 anos e para mulher 85
const timeContri = idade + contribuicao

if(sexo=='M' && contribuicao>=35 && timeContri>=95){
    console.log(`${nome}, você pode se aposentar.`)
}else if(sexo=='F' && contribuicao>=30 && timeContri>=85){
    console.log(`${nome}, você pode se aposentar.`)
}else{
    console.log(`${nome}, você NÃO pode se aposentar.`)
    console.log(`Idade + Contribuição = ${timeContri} anos.`)
}