const saudacao='oi'//contexto lexico 1

function exec(){
    const saudacao ='Ola'//contexto lexico2
    return saudacao
}
const cliente={
    nome:'João',
    idade:53,
    peso:87,
    altura:1.78

}
console.log(cliente)
console.log(exec())
console.log(saudacao)