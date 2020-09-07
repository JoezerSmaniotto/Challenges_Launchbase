// nao adicionar numeros repitidos, valores entre 1 e 100, caixa vazia nao pode,
// quando adicionar um valor sumir apenas as respostas do resultado e nao os valores da select

// pega o que vai usar do html
let input = document.querySelector('input#numero')
let add = document.querySelector('input#adicionar')
let final = document.querySelector('input#finalizar')
let table = document.getElementById('select')
let res = document.getElementById('res')

// valida a caixa de entrada 1-100
function valCax(n) {
    if(Number(n)>= 1 && Number(n)<=100){
        return false
    }else{
        return true
    }
}
function adicionar() {
    // validar caixa de entrada
    if (valCax(input.value)) {
        window.alert('Digite um valor para continuar!')
    // proibe numeros repetidos
    } else if (valores.indexOf(Number(input.value)) != -1 ) {
        window.alert('Valor já existente, digite outro!')
    } else {
        // envia valor da entrada e add na table
        res.innerHTML=''
        addTable(Number(input.value))
        // adiciona o input para o array
        valores.push(Number(input.value))
    }
    // limpa o numero do input e deixa selecionado
    input.value = ''
    input.focus()
}

// array dos valores
let valores = [ ]

// adicional os valores a section
function addTable(n) {
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        table.appendChild(item)   
}

// é chamado quando clica em finalizar e mostra os resultados
function finalizar(){
    if (table.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        res.innerHTML = `<p>Valores analisados:</p>`

        // ao todo temos X numeros cadastrados
        res.innerHTML += `Ao todo temos ${valores.length} números cadastrados<br>`

        // o maior valor informado foi X
        let maior = Math.max(...valores)// pode nao funcionar para Muitos valores!
        res.innerHTML += `O maior valor informado foi ${maior}<br>`

        // o menor valor informado foi X
        let menor = Math.min(...valores)// pode nao funcionar para Muitos valores!
        res.innerHTML += `O menor valor informado foi ${menor}<br>`

        // somando todos os valores temos XX
        let soma = 0
        for(let i = 0; i< valores.length; i++){
            soma += valores[i]
        }
        res.innerHTML += `Somando todos os valores temos ${soma}<br>`

        // a media dos valoredes digitados é X
        let media = soma/valores.length
        res.innerHTML += `A média dos valores digitados é ${media}<br>`
    }
}