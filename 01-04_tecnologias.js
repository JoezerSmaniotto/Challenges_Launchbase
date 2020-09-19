const usuarios =[
    {
        nome: 'Carlos',
        tecnologias:['HTML','CSS']
    },{
        nome: 'Jasmine',
        tecnologias:['JavaScript','CSS']
    },{
        nome: 'Jasmine',
        tecnologias:['Angular','JS','NodeJS']
    },{
        nome: 'Tuane',
        tecnologias:['HTML','NodeJS', 'JS']
    },{
        nome: 'Wendell',
        tecnologias:['CSS','JS']
    }
]

//lista de usuarios que trabalham com css
function checaSeUsuarioUsaCss(usuario) {
    for(let tecnologia of usuario.tecnologias){
        if(tecnologia == 'CSS'){
            return true
        }
    }
    return false
}

for (let i = 0; i < usuarios.length; i++) {
     let usuarioTrabalhaComCss = checaSeUsuarioUsaCss(usuarios[i])

    if(usuarioTrabalhaComCss){
        console.log(`O usuario ${usuarios[i].nome} trabalha com CSS.`)
    }
}
console.log('')
//lista de usuarios e todas tecnologias
for(usuario of usuarios){
    console.log(`O ${usuario.nome} trabalha com as tecnologias ${usuario.tecnologias.join(', ')}`)
}