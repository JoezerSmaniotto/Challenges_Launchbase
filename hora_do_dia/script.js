function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    if (hora>=0 && hora<12) {
        img.src = 'img/manha.jpg'
        document.body.style.background = '#dcff40'
    }else if(hora>=12 && hora<18){
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#ff7b00'
    }else{
        img.src = 'img/noite.jpg'
        document.body.style.background = '#0004ff'
    }
}
