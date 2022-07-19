const nome= 'Franc1slaine'

console.log(nome.charAt(8))
console.log(nome.charCodeAt(8))
console.log(nome.indexOf('r'))
console.log(nome.substring(8))
console.log(nome.substring(0,8))
console.log("Nome ".concat(nome).concat('!'))
console.log(nome.replace(1,'i'))
console.log(nome.replace(/\w/g,'i'))
console.log('Andre,Fran'.split(','))

const Nome='Fran'
const concatenacao= 'Ola'+' '+ Nome + '!';
const template =`
Olá
${Nome}!`
console.log(concatenacao,template)

