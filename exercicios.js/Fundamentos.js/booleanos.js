let nome = false;
console.log(nome);
nome=1;
console.log(!!nome);//!!negação duas vezes mostra o valor booleano

console.log('OS TRUE');
console.log(!!3);
console.log(!!-3);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(nome=true));

console.log('OS FALSE')
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(nome=false));