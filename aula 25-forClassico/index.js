 /*   console.log('Linha 0');
    console.log('Linha 1');
    console.log('Linha 2');
    console.log('Linha 3');
    console.log('Linha 4');
    console.log('Linha 5');
*/

//estrutura do for
//for (declarar var e seu valor; condição do for; incrementar a variavel usada no for) {}
//++ incrementa em 1
//pode ser incrementar usando tbm += valor, para incrementar em valores maiores
//for (let i = 0; i <= 500; i += 10) {
//    console.log(`Linha ${i}`);
//}

//podemos decrementar o valor tbm como abaixo
//for (let i = 500; i >= 400; i -= 10) {
//    console.log (`Linha ${i}`);
//}

//podemos checar se o valor é par, usando variaveis para testar os valores de cada linha, exemplo abaixo
/*for (let i= 0; i <= 10; i++) {
    const par = i % 2 ===0 ? 'par' : 'ímpar';
    console.log(i, par);
}*/

//percorrer arrays usando for
const frutas = ['Maçã', 'Pêra', 'Uva', 'Melancia', 'Melao', 'Abacaxi', 'Kiwi'];

for (let i= 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`,frutas[i])
}
    


