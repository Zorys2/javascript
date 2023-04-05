function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    img.setAttribute('id', 'foto')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 11
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.setAttribute('src', 'manha.png')
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.setAttribute('src', 'tarde.png')
        document.body.style.background = '#b9846f'
    } else {
        img.setAttribute('src', 'noite.png')
        document.body.style.background = '#515154'
    }
}
