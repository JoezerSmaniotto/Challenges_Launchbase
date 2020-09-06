function analisar(){
    var numero = document.getElementById('numero')
    var tab = document.getElementById('selTab')
    var res = document.getElementById('res')

    //converte input do html de objeto para numerico
    var num = Number(numero.value)
    // valida o input// obrigatorio a digitar um numero numero.value == '' ou numero.value.length == 0
    if (numero.value.length == 0) {
        window.alert('[ERROR]! Digite um número!')
    } else {
        tab.innerHTML =''
        for (let t = 1; t <= 10; t++) {
            //tabuada
            let item = document.createElement('option')
            item.text = `${num} X ${t} = ${t*num}`
            tab.appendChild(item)
        }   
    }
}