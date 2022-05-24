// Para se criar um objeto se usa as {} ex: const objeto = { };
// Objetos podem ser declarados por constantes
// para se criar atributos dentro do objeto se usa o :
// como no exemplo onst objeto = { atributo:'sidney', };
// usar uma virgula para separar os atributos
// para acessar algum atributo se chama o objeto seguido do . e o nome do atributo  ex:  objeto.atributo
// pode se fazer funções retornando o objeto!
// argumento é o valor passado ao parametro
// pode se criar METODOS dentro de variaveis
// pode ser usar a string template ${this} dentro do metodo no objeto para declarar algum argumento da função.

const pessoa1 = {
    nome: 'Sidney',
    sobrenome: 'Neto',
    idade:25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando Oi...`);
    }
};

pessoa1.fala();

/*
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome, // não precisa repetir valores ao declarar a variavel, como no exemplo abaixo
        sobrenome, idade
    };
} //Factory Function

const pessoa1 = criaPessoa('Luiz', 'Otavio', 25);
const pessoa2 = criaPessoa('Sidney', 'Neto', 33);
const pessoa3 = criaPessoa('Beatriz', 'Azevedo', 31);
console.log(pessoa1);
*/

/*const pessoa1 ={
    nome: 'Sidney',
    sobrenome: 'Neto',
    idade:27
};*/

