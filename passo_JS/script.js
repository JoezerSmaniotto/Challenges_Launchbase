// pega dados do html
var numInicio = document.getElementById('numInicio')
var numFim = document.getElementById('numFim')
var numPasso = document.getElementById('numPasso')
var res = document.getElementById('res')

// function q faz toda a validaçao de dados preenchidos
function validar(){

    var passara = Number(numPasso.value)

    condiçaoGeral = numInicio.value.length == 0 && numFim.value == '' && numPasso.value == ''
    condiçaoPasso = numPasso.value == '' || passara <= 0

    if (condiçaoGeral == true) {
        window.alert('[ERROR]! Adicione valores para funcionar!')
    } 
    else if (numInicio.value == ''){
        res.innerHTML = `[SEM INICIO]! Digite um inicio para continuar!`
    } 
    else if (numFim.value == ''){
        window.alert('QUER QUE EU CONTE INFINITAMENTE? Adicionar um Fim.')
    } 
    else if (condiçaoPasso == true){
        window.alert('[PASSO INVALIDO]! Vou considerar o Passo como 1.')
        contar()
    }
    else{
        contar()
    }
}

function contar(){
    // passa os input para numerico
    var inicio = Number(numInicio.value)
    var fim = Number(numFim.value)
    var pass = Number(numPasso.value)
    // arruma o passo para nao ser 0
    if (pass <= 0) {
        pass = 1
    }
    // emojis
    var lado = '&#128073;'
    var final = '&#128400;'
    
    res.innerHTML = `Contando:<br> `
    //contagem crescente
    if (inicio<fim){
        for (let c = inicio; c <= fim ; c += pass) {
            res.innerHTML += `${c}${lado}`
        }
    //contagem regressiva
    }else{
        for(let c = inicio; c >= fim; c -= pass){
            res.innerHTML += `${c}${lado}`
        }
    }
    res.innerHTML += `${final}`
}