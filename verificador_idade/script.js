function verificar(){
    // pega o ano atual
    var date = new Date()
    var anoAtual = date.getFullYear()
    //pega dados do html
    var nascimento = document.getElementById('idade')
    var res = document.querySelector('div#res')
    var idade = anoAtual - Number(nascimento.value)
    var fsex = document.getElementsByName('radsex')
    var genero =''
    if (nascimento.value.length == 0 || nascimento.value < 1900 || Number(nascimento.value > anoAtual)) {
        window.alert('[ERROR]; Verifique e tente novamente!')
    }else{
        //cria a img no html com o id=img
        var img = document.createElement('img')
        img.setAttribute('id', 'img')
        
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'https://images.pexels.com/photos/3845495/pexels-photo-3845495.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
            }else if (idade <21) {
                //jovem
                img.setAttribute('src','https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
            }else if (idade <50) {
                //adulto
                img.setAttribute('src', 'https://images.pexels.com/photos/3772618/pexels-photo-3772618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
            }else{
                //idoso
                img.setAttribute('src', 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'https://images.pexels.com/photos/4407900/pexels-photo-4407900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
            }else if (idade <21) {
                //jovem
                img.setAttribute('src', 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
            }else if (idade <50) {
                //adulto
                img.setAttribute('src', 'https://images.pexels.com/photos/5206277/pexels-photo-5206277.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
            }else{
                //idoso
                img.setAttribute('src', 'https://images.pexels.com/photos/2050976/pexels-photo-2050976.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
            }
        }
        //manda a msg para o html
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        // manda a imagem para o img criado no js 
        res.appendChild(img)
    }



}

// pegar as fotos de pexels.com