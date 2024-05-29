var pais = window.document.querySelector(".texto")
var res = window.document.querySelector("#res")

function validar() {
    var p = (pais.value)

    res.innerHTML = `Seu país é <strong>${p}</strong>.`

    if (p == "Brasil") {
        res.innerHTML += `Você é Brasileiro(a).`

    } else {
        res.innerHTML += `Você é Estrangeiro(a).`
    }
}