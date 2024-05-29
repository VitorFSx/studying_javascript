var agora = new Date()
var hora = agora.getHours()
console.log(`agora são exatamente ${hora} horas.`)
if (hora <= 11 && hora > 3) {
    console.log("Bom dia !")
} else if (hora >= 12 && hora < 18) {
    console.log("Boa tarde !")
} else if (hora >= 18 && hora > 1) {
    console.log("Boa noite")
} else {
    console.log("Boa madrugada")
}