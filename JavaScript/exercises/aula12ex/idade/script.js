function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'foto-bebe-h.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-jovem-h.jpg')
            } else if (idade > 50) {
                img.setAttribute('src', 'foto-adulto-h.jpg')
            } else {
                img.setAttribute('src', 'foto-idoso-h.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'foto-bebe-m.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-jovem-m.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-adulto-m.jpg')
            } else {
                img.setAttribute('src', 'foto-idoso-m.jpg')
            }

        }
        res.style.textAling = 'center'
        res.innerHTML = `${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}