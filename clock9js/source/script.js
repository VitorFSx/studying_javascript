var msg = window.document.getElementById("msg")
var imagem = window.document.getElementById("imagem")
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
msg.innerHTML = `Agora são ${hora}:${min} horas.`

if (hora >= 4 && hora < 12) {
    // BOM DIA !!
    imagem.src = "fotos/manha.png" 
    window.document.body.style.background = "#fce691"

} else if (hora >= 12 && hora < 18) {
    // BOA TARDE !!
    imagem.src = "fotos/tarde.png"
    window.document.body.style.background = "#5d3649"

} else if ( hora >= 18 && hora < 24) {
    // BOA NOITE !!
    imagem.src = "fotos/noite.png"
    window.document.body.style.background = "#0c1617"

} else if (hora >= 1 && hora <= 3) {
    // BOA MADRUGADA !!
    imagem.src = "fotos/madruga.png"
    window.document.body.style.background = "#11151e"
}