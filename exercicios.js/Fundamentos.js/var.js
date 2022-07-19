{
    var nome='oi'
}
console.log(nome)//var é vista fora do escopo (global)

function teste(){
    var local = 123
    console.log(local)
}
teste()
//var em funçao so pode ser vista dentro do escopo