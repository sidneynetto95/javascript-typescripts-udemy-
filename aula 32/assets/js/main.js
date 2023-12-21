const numeros = [1,2,3,4,5,6,7,8,9];

for (let numero of numeros) {

    if (numero === 2 || numero === 5){
        console.log('Pulei o número 2 ou 5');
        continue; //pula para a proxima interação, continua executando o codigo
    }

    if (numero === 7) {
        console.log('7 encontrado. Finalizar busca...')
        break; //finaliza a função no momento que a condição do if é verdadeira
    }
    console.log(numero);
}