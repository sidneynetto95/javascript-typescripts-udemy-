//para criação de objetos usamos as {}
//podemos criar objetos dentro de objetos no js       objeto1{objeto2{}}
const pessoa = {
    nome: 'Sidney',
    sobrenome: 'Neto',
    idade: 27,
    endereco: {
        rua: 'Rua Paulo Pires',
        numero: 500
    }
};

//fazer atribuição usando o objeto de forma simples
//const nome= pessoa.nome;

//atribuição via desestruturação, usamos a {} para indicar que é um objeto e ai dentro das {} podemos chamar a variavel do objeto que desejamos atribuir na variavel, o nome da variavel pode ser o mesmo que o item selecionado no objeto, seguindo a ordem em que ele esta no objeto, e ai então dizemos qual é o objeto que estamos selecionando como no exemplo abaixo
//     { nomedavariavel } = nome do objeto
//const { nome, sobrenome } = pessoa;
//podemos mudar o nome da variavel tbm como da forma a abaixo
//const { nome: n ='', sobrenome } = pessoa;

//para selecionar um valor de um objeto dentro de outro objeto fazemos como no exemplo abaixo
const { 
    endereco: {rua: r = 'valor padrao' , numero },
    endereco 
} = pessoa;
console.log(rua, numero, endereco);

// o comando rest tbm funciona com objetos.