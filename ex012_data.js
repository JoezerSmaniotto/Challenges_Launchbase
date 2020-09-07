//  faz a data completa
var agora = new Date() //pega data e hora local
var hora = agora.getHours() //.getHours pega hora
var min = agora.getMinutes()// pega minutos
var dia = agora.getDate() //pega o dia 1-31
var meses = agora.getMonth() //pega o mes [0=janeiro, ...]
var ano = agora.getFullYear() //pega o ano
var diaSemana = agora.getDay() // .getDay pega o dia da demana [0=doming, 1=segunda, 2=terça, ...]
var mes = ''
switch (meses) {
    case 0:
        var mes = 'Janeiro'
        break;
    case 1:
        var mes = 'Fevereiro'
        break;
    case 2:
        var mes = 'Março'
        break;
    case 3:
        var mes = 'Abril'
        break;
    case 4:
        var mes = 'Maio'
        break;
    case 5:
        var mes = 'Junho'
        break;
    case 6:
        var mes = 'Julho'
        break;
    case 7:
        var mes = 'Agosto'
        break;
    case 8:
        var mes = 'Setembro'
        break;
    case 9:
        var mes = 'Outubro'
        break;
    case 10:
        var mes = 'Novembro'
        break;
    case 11:
        var mes = 'Dezembro'
        break;    
    default:
        var mes = '[ERROR]'
        break;
}


switch (diaSemana) {
    case 0:
        console.log(`Domingo dia ${dia} de ${mes} de ${ano}, ${hora}:${min}`)
        break;
    case 1:
        console.log(`Segunda dia ${dia} de ${mes} de ${ano}, ${hora}:${min}`)
        break;
    case 2:
        console.log(`Terça dia ${dia} de ${mes} de ${ano}, ${hora}:${min}`)
        break;
    case 3:
        console.log(`Quarta dia ${dia} de ${mes} de ${ano}, ${hora}:${min}`)
        break;
    case 4:
        console.log(`Quinta dia ${dia} de ${mes} de ${ano}, ${hora}:${min}`)
        break;
    case 5:
        console.log(`Sexta dia ${dia} de ${mes} de ${ano}, ${hora}:${min}`)
        break;
    case 6:
        console.log(`Sabado dia ${dia} de ${mes} de ${ano}, ${hora}:${min}`)
        break;
    default:
        console.log('[ERROR]')
        break;
}