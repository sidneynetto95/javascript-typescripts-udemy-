//parseFloat();   Passa o objeto para float
//parseInt();  Passa o objeto para Números inteiros
//parseNumber(); Passa o objeto para Números

let num1 = prompt('Digite um número');
let num2 = prompt('Digite outro número');
num1 = parseFloat(num1);
num2 = parseFloat(num2);
alert(`A soma entre ${num1} e ${num2} é igual a ${num1 + num2}`);
