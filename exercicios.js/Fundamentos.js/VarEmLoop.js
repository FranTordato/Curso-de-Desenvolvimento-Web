for (var a = 0;a < 10;a++){
    console.log(a)
}
console.log('a =',a)//fora do bloco imprime o valor que fez sair do laço

const funcs =[]

for (var i = 0;i <10; i ++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
//fora do laço ele vai chamar o ultimo valor independente do local que se pede