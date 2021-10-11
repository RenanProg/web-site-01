function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML =` Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = '../image/fotomanha.png'
        document.body.style.background = '#ff7f50'
        foto.style.background = '#ff7f50bd'
        msg.innerHTML = `Bom Dia <br> Agora são ${hora} horas e ${min} minutos.`
         
    } 
    else if (hora >=12 && hora < 18) {
        //boa tarde
        img.src = '../image/fototarde.png'
        msg.innerHTML = `Boa Tarde <br> Agora são ${hora} horas e ${min} minutos.`
       document.body.style.background = '#912700bd'
       
    }
     else {
            //boa noite
            img.src = '../image/fotonoite.png'
            document.body.style.background = '#002140'
            msg.innerHTML = `Boa noite <br> Agora são ${hora} horas e ${min} minutos.`
            
    
        }
    }