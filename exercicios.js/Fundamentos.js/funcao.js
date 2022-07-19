console.log(typeof Object)

class Produto{}
console.log(typeof Produto)
//funçao sem retorno...
function imprimirSoma(a,b) {
    console.log(a+b)
}
imprimirSoma(2,3)
imprimirSoma(2)
//funçao com retorno
function soma(a,b=1){
    return a + b
}

console.log(soma (2, 3))
console.log(soma (2))
//armazenanado uma funçao em uma variavel
const imprimir= function(a,b){
    console.log(a+b)
}
imprimir(2,3)
//armazenando uma funçao arrow em uma variavel
const conta = (a,b)=>{
    return a+b 
}
console.log(conta(2,3))

//retorno implicito
const subtracao= (a,b)=>a-b//funçao de unica linha
    console.log(subtracao(2,3))

