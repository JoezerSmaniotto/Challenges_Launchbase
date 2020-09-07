//armazenar um array de usuarios, cada usuario tem nome e suas tecnologias
//percorra a lista de usuarios com uma estrutura de repetiçao imprimindo as info dos usuarios

const usuarios =[
    {
        nome: 'Carlos',
        tecnologias:['HTML','CSS']
    },
    {
        nome: 'Jasmine',
        tecnologias:['JavaScript','CSS']
    },
    {
        nome: 'Tuane',
        tecnologias:['HTML','NodeJs', 'JS']
    }
]
// imprime em terminal o resultado

for (let i = 0; i < usuarios.length; i++) {
    let result = ''
    result = `${usuarios[i].nome} trabalha com `
    for (let j = 0; j < usuarios[i].tecnologias.length; j++) {
        result += `${usuarios[i].tecnologias[j]}`
        if(!(usuarios[i].tecnologias.length == j+1)){
            result = result + ', '
        }
    }
    console.log(result)
}

// EX: Carlos trabalha com HTML,CSS ...