/* operador OU
||
Todas as expressões precisam ser falsas para que retorne false
Retorna sempre o primeiro valor verdadeiro, mesmo se existir algum false
*/
/*
const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);
*/

const a = 0;
const b = null;
const c = 'false';  // esse retorna pois é um string
const d = false;
const e = NaN;

console.log(a || b || c || d || e);