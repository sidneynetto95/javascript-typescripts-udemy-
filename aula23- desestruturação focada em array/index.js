/* atribuição via desestruturação
let a = 'A';
let b = 'B';
let c = 'C';

const numeros = [b, c, a];
[a, b ,c] = numeros;

console.log(a, b, c);
*/
//usando seletor de array para selecionar o indice que será exibido na array
//console.log(numeros[0]);

// indice        0  1  2  3  4  5  6  7  8
//const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]
//const primeiroNumero = numeros[0];
//console.log(primeiroNumero);
//da forma abaixo selecionamos os indices da array pela ordem na sequência e alocamos ao valor da variavel referente, ex: primeiroNumero = indice 0, segundoNumero = indice 1

//podemos tambem utilizar " ... " para pegar o resto do array e armazenando o que sobra da array neste "rest"; esse operador quando é usando para juntar o resto de alguma coisa chamamos de "rest" e quando é para espalhar algum valor chamamos de "spread"
//const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;

//podemos também pular valores na hora de capturar o valor da array como no exemplo abaixo, deixando um espaço em branco aonde seria o indice correspondente do valor que desejamos pular
//const [um, , tres, , cinco, , sete] = numeros;

//podemos ter uma ou varias arrays dentro de outra array como abaixo
const numeros =  [
//segundo indice     0  1   2
            [1, 2, 3],   //indice 0    primeiro indice
//indice     0  1   2
            [4, 5, 6],   //indice 1
//indice     0  1   2
            [7, 8, 9]    //indice 2
];
//para acessar esses valores dentro da array precisamos passar o primeiro indice que se refere ao grupo, e apos o segundo indice que aponta o item dentro do grupo
console.log(numeros[1][2], numeros[2][0]);
//podemos selecionar também usando a destruturação como na maneira a baixo
//abrisse o [] para indicar a array, usamos a virgula para pular o primiro grupo do primeiro indice, ai então abrimos [] novamente para indicar que entramos no segundo grupo, depois dentro do grupo selecionado, usamos duas virgulas para pular os dois primeiros indices do grupo e selecionar o valor 6 do indice 2 de segundo array dentro do grupo
const [,[,,seis]] = numeros;
console.log(seis);

//usando a desestruturação para simplificar a seleção do valor desejado dentro das arrays
//assim podemos selecionaro valor de 9 de forma clara e menos complexa
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);;