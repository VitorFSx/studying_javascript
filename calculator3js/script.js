var c = window.document.getElementById("area")
c.addEventListener("click", clicar)
c.addEventListener("mouseenter", entrar)
c.addEventListener("mouseout", sair)

function clicar() {
    c.innerText = "Clicked!"
    c.style.background = "red"
}

function entrar() {
    c.innerText = "Entrou"
}

function sair() {
    c.innerText = "Saiu"
    c.style.background = "rgb(88, 216, 88)"
}

function somar() {
    var tn1 = window.document.querySelector(".txtn1")
    var tn2 = window.document.querySelector(".txtn2")

    var res = window.document.getElementById("res")

    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = `A soma entre ${n1} e o ${n2} resulta em <strong>${s}</strong>`
}