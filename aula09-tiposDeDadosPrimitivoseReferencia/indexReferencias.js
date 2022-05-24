// Dados de Referência 
// Dados de referência são mutáveis
// Passados por Referências
// Arrays (array)
// Objetos (object)
// Funções (function)

/*
let a = [1, 2, 3];
let b = a;  // O b aponta para o mesmo lugar na memoria que o a
console.log(a, b);

a.push(4);
console.log(a, b); // continua exibindo todos os valores iguais pois b está apontando na memoria de a
// b não faz uma cópia do valor de a, e sim faz a referencia ao valor de a na memória

b.pop();
console.log(a, b); // retira um valor de a tbm pois b aponta para o mesmo lugar da memoria que a
*/

const a = {
    nome: 'Sidney',
    sobrenome: 'Neto'
};
const b = a; // ou const b ={...a}; isso se chama um spread, e serve para copiar o valor ao inves de referenciar! 

a.nome = 'João';
console.log(b);
