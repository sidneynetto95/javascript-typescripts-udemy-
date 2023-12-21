//const frutas = ['banana', 'pera', 'maçã'];
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio' ,
    idade: 30
};


//for (let i = 0 ; i <frutas.length; i++) {
//    console.log(frutas[i]);
//}


//for in -> lê os índices ou chaves do objeto
//for (let indice in frutas) {
//    console.log(frutas[index]);
//}

for (let chaves in pessoa) {
    console.log(chaves);
}