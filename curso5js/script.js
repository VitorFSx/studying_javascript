var txtv = window.document.querySelector(".txtvel")
var res = window.document.querySelector("#res")

function calcular() {
    var vel = Number(txtv.value)

    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel} KM/h</strong></p>`

    if (vel > 60) {
        res.innerHTML += `<p>Você está <strong>MULTADO</strong> por excesso de velocidade</p>`
    }

    res.innerHTML += `<p>Dirija semrpe com sinto de segurança !</p>`
}