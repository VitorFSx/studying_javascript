var idade = 20
console.log(`você tem ${idade} anos.`)

if (idade < 16) {
    console.log("Menor de idade, não vota.")
} else if (idade < 18 || idade > 64) {
    console .log("Voto opcional.")
} else {
    console.log("Maior de idade, ja vota obrigatoriamente") 
}