// dar bonificação de 500 reais se o vendedor possuir 100 pontos ou mais
// dar bonificação de 1 dia de folga para quem possui 50-99 pontos
// impreimir em tela: Vendedor fulano com x pontos você ganho bonificaçao de x

const vendedores = [
    {   
        nome: 'Wendell',
        pontos: 49
    },{
        nome: 'Joezer',
        pontos: 89
    },{
        nome: 'Camila',
        pontos: 119
    },{
        nome: 'Fulano',
        pontos: 20
    },{
        nome: 'Ciclano',
        pontos: 201
    }
]
for (let i = 0; i < vendedores.length; i++) {
    if (vendedores[i].pontos >= 100) {
        console.log(`O vendedor ${vendedores[i].nome} com ${vendedores[i].pontos} pontos ganhou bonificação de $500.00 .`)
    }else if(vendedores[i].pontos >=50 && vendedores[i].pontos < 100){
        console.log(`O vendedor ${vendedores[i].nome} com ${vendedores[i].pontos} pontos ganhou 1 dia de folga e $150.00 .`) 
    }else {
        console.log(`O vendedor ${vendedores[i].nome} com ${vendedores[i].pontos} pontos ganhou bonificação de $100.00 .`)
    }
    
}
