//int,float,tudo é number

const peso1=1.0;
const peso2=Number ('2.0');

console.log(Number.isInteger(peso1));

const avaliacao1=9.7
const avaliacao2=8.7
const total=avaliacao1*peso1+avaliacao2*peso2;
const media=total/(peso1*peso2);

console.log(media.toFixed(2));
console.log(media.toString(2));//CONVERTE EM BINÁRIO
console.log(typeof media);
console.log(typeof Number);
console.log(7/0);//infinity
console.log('10'/2);
console.log(0.1+0.7);//não dá valor preciso
console.log((10).toFixed(1));
console.log("3"+2);//string ganha