const nome = ['Sidney', 'Beatriz', 'Luna'];

//for padrão
//usado geralmente com iteráveis(array ou string)
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

console.log('####################');

//for in
//retorna o indice ou chave (string, array ou objetos)
for (let i in nome) {
    console.log(nome[i]);
}

console.log('####################');

//for off
//retorna o valor em si(iteráveis, arrays ou strings)
for (let valor of nome) {
    console.log(valor);
}