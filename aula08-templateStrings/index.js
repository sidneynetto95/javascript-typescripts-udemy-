//sempre que se separar por virgulas nas dec


const nome = 'Sidney da Costa';
const sobrenome = 'Santos Neto';
const idade = 27;
const peso = 85;
const alturaEmM = 1.80;
let imc; // peso / (altura*altura) 
let anoNascimento;
imc = peso / (alturaEmM*alturaEmM);
anoNascimento = 2022 - idade;

// template strings     ${}
// é o uso de ${} para declarar as variaveis ou constantes

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} KG`)
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}` );
console.log(`${nome} nasceu em ${anoNascimento}`);

