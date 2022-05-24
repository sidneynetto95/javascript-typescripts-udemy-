// FUNÇÕES    
// funções são METODOS 
// Funções são chamadas pelo comando: function nomeFuncao() {};
// Os nomes de funções seguem as mesmas regras das variaveis
// { } é onde se delimita o corpo da função 
// ao chamar uma função criada se usa os ( ) apos o nome da função para executa-la
// para criar parametros se coloca no () no final da declaração da função
// os parametros podem ser usados para adicinar um valor ao mesmo depois de ter sido declarado, ao chamar a função correspondente: função(parametro)
// return no fim da função retorna um valor a função
// sem o return a função fica vazia
// tudo que estiver dentro das {} esta protegido, não pode ser acessado de fora da função.  Dizemos que está dentro do escopo da função
// Pode se criar funções atribuindo-as na declaração de uma variavel ex: const funcao = function (){ };
// A FORMA MAIS ATUAL DE SE CRIAR UMA FUNÇÃO É USANDO A ARROW FUNCTION
// que siginifica usar => para criar a função!!
// ex:  const funcao = (n) => { };
// caso tenha só um parametro pode ser escrito de forma simplificada, removendo as chaves{} e os parenteses() da função.
// não vale a pena criar funções que fazem muitas coisas, vale mais a pena criar uma função que faça uma coisa só muito bem
//METODO IIFE é uma função criada e auto invocada ao mesmo tempo

const raiz = (n) => {
    return n ** 0.5;
};

console.log(raiz(9));

//  OU

const raiz2 = n => n ** 0.5;

console.log(raiz2(16));



/*
function saudacao(nome) {
    return `Bom dia ${nome}!`;
}
const variavel = saudacao('Sidney');
 console.log(variavel);
*/

//function soma(x = 1, y = 1) {
//    const resultado = x + y;
//    return resultado;
//}
//console.log(soma(2 ,2));

//const raiz = function (n) {
//    return n ** 0.5;
//};
//console.log(raiz(9));