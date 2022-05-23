// ARRAYS !!!
//Arrays são listas
//para criar um array se usa [] após declarar a variável, ex : 
//const alunos = ['sidney', 'beatriz', 'luke'];
// dentro das arrays podemos colocar qualquer tipo de dado, mas é uma boa prática separar as arrays por x tipos de dados
//arrays são INDEXADOS por elementos
//ao acessar um valor vazio sera retornado um 'undefined'
//arrays são OBJETOS
//ARRAYS podem ser constantes(const) ou variaveis(let)

//                 0          1        2
const alunos = ['sidney', 'beatriz', 'luke'];

alunos.push('Luiza');
alunos.push('Eduardo');

console.log(alunos.slice(0, -1));//exibe contando de tras para frente
console.log(alunos.slice(0, 3));//exibe até o indice 2

//delete alunos[1]; apaga o valor do índice 1 e deixa o elemento do índice vazio "empty item"

//alunos.shift(); remove o primeiro valor da array
//const removido = alunos.shift(); remove o primeiro valor da array, criando uma constante com outra array para receber o valor removido


//alunos.pop(); remove o ultimo valor da array
//const removido = alunos.pop(); remove o primeiro valor da array, criando uma constante com outra array para receber o valor removido

//alunos.unshift('Maria'); adiciona um valor no começo da array

//alunos.push('Maria'); adiciona um valor no final da array
//alunos[alunos.length] = 'Maria'; adiciona mais um valor no array
//alunos[3]='pedro'; adiciona mais um valor na Array, a partir do ultimo index possuido, no caso a array iria até 2 e recebe o 3 index 'pedro'

//alunos[0] = 'Eduardo'; Transforma o index 0 'sidney' em 'Eduardo'

//console.log(alunos); acessa todo o index
//console.log(alunos[2]); acessa o index 2'luke'

//console.log(alunos.length); mostra quantos indices tem o array


console.log(alunos);