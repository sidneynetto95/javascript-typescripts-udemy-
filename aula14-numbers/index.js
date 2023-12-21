// IEEE 754-2008
let num1 = 10; //number
let num2 = 2.5; //number

// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0
//Existe uma pequena imprecisão nos calculos que podem ser mais fácilmente persebidos com expressões de muitas casas deco,aos

console.log(num1);
console.log(Number.isInteger(num1));

//num1 = num1.toString(); converte o valor de number para string

//num1 = num1.toString(2); converte o valor de number para binarios

//num1 = num1.toFixed(2); trava 2 casas decimais no número

//console.log(Number.isInteger(num1)); Retorna verdadeiro ou falso respondendo se é um número inteiro ou não

//let temp = num1 * 'Ola';
//console.long(Number.isNaN(temp)); retorna verdadeiro se a conta for invalida