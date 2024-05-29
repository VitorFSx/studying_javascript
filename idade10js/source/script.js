var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById("txtano")

function verificar() {
    var res = document.querySelector("div#res")

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente !")

    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade Calculada: ${idade}`

        var gen = ""

        var img = document.createElement("img")
        img.setAttribute("id", "foto")

        if (fsex[0].checked) {
            gen = "Homem"

            if (idade >= 0 && idade < 5) {
                // Bebê
                img.setAttribute("src", "bb-m.png")

            } else if (idade >= 5 && idade < 13) {
                // Criança
                img.setAttribute("src", "child-m.png")

            } else if (idade >= 13 && idade < 18) {
                // Adolescente
                img.setAttribute("src", "ad-m.png")

            } else if (idade >= 18 && idade < 30) {
                // Jovem
                img.setAttribute("src", "jv-m.png")

            } else if (idade >= 30 && idade < 60){
                // Adulto
                img.setAttribute("src", "adu-m.png")

            } else {
                // Idoso
                img.setAttribute("src", "idom.png")
            }

        } else if (fsex[1].checked) {
            gen = "Mulher"

            if (idade >= 0 && idade < 5) {
                // Bebê
                img.setAttribute("src", "bb-f.png")

            } else if (idade >= 5 && idade < 13) {
                // Criança
                img.setAttribute("src", "child-f.png")

            } else if (idade >= 13 && idade < 18) {
                // Adolescente
                img.setAttribute("src", "ad-f.png")

            } else if (idade >= 18 && idade < 30) {
                // Jovem
                img.setAttribute("src", "jv-f.png")

            } else if (idade >= 30 && idade < 60){
                // Adulto
                img.setAttribute("src", "adu-f.png")

            } else {
                // Idosa
                img.setAttribute("src", "ido-f.png")
            }
        }
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }
}