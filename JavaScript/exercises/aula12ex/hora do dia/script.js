function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#E2CD9F'
    } else if (hora >=12 && hora < 18) {
        img.src = 'fototarde.jpg'
        document.body.style.background = '#B9846F'
    } else {
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#0B3B7A'
    }
}
