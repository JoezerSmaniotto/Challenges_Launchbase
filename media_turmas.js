
const alunosTurmaA =[
    {                                       
        nome : "Joezer",          
        nota : 9.8
    },
    {
        nome : 'Mayk',             
        nota : 10
    },
    {
        nome : 'Valesca',          
        nota : 2
    }
]

const alunosTurmaB =[                      
    {                                       
        nome : "Wendell",          
        nota : 5
    },
    {
        nome : 'Diego',             
        nota : 6
    },
    {
        nome : 'Fulano',          
        nota : 3
    },
    {
        nome: 'Ciclano',
        nota: 10
    }
]

// calcula a media e retorna para a const
function calculaMedia(alunos){
    let soma = 0
    for (let i = 0; i<alunos.length; i++){
        soma = soma + alunos[i].nota
    }
    const media = soma / alunos.length
    return media
}

//envia para a funçao os array  e recebe na const a media
const mediaA = calculaMedia(alunosTurmaA)
const mediaB = calculaMedia(alunosTurmaB)

// imprime no terminal
function enviaMensagem(media, turma){
    //se a média for maior que 5 parabenizar a turma
    if (media >5){
        console.log(`A média da ${turma} foi de ${media}. Parabéns!`)
    }else{
        console.log(`A média da ${turma} é menor que 5`)
    }
}

// marcar aluno como reprovado se a nota for menor que 5 e enviar mensagem
function marcarComoReprovado (aluno){
    aluno.reprovado = false
    if (aluno.nota < 5){
        aluno.reprovado = true
    }
}

// envia mensagem de reprovado
function enviarMensagemReprovado(aluno) {
    if(aluno.reprovado){
        console.log(`O aluno ${aluno.nome} está reprovado!`)
    }
}

function alunosReprovados(alunos) {
    for (let aluno of alunos){
        marcarComoReprovado(aluno)
        enviarMensagemReprovado(aluno)
    }
}
// manda a funçao imprimir no terminal a media e a turma 
enviaMensagem(mediaA, 'Turma A')
enviaMensagem(mediaB, 'Turma B')

// manda nas funçoes dos alunos reprovados
alunosReprovados(alunosTurmaA)
alunosReprovados(alunosTurmaB)
