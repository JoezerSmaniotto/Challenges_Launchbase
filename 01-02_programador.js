//armazenar dados de um programador como nome idade e tecnologia.
// um programador pode trabalhar com varias tecnologias.
// as tecnologias devem ser objetos contendo nome e especialidade.
//imprima= O usuario Fulano tem 32 anos e usa a tecnologia C++ especializada em Desktop.

const programador ={
    nome: 'Carlos',
    idade: 32,
    tecnologias: [
        {nome: 'C++',especialidade: 'Desktop'},
        {nome: 'JavaScript', especialidade: 'Web/Mobile'},
        {nome: 'Python', especialidade: 'Data Science'}
    ]
}
console.log(`O usuário ${programador.nome} tem ${programador.idade} anos.`)
console.log(`E usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}.`)