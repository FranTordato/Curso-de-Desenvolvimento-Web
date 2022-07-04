const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))
//isInterger mostra se true ou false
//Number nesse caso é uma função
const aval1 = 10
const aval2 = 6

const notaFinal = aval1 * peso1 + aval2 * peso2
const media = notaFinal / (peso1 + peso2)

console.log(media.toFixed(2))
//toFixed delimita quantas casas decimais vc quer
console.log(media.toString(2))
//toString(2)converte o valor em string(binario)
console.log(typeof media)