function random(min, max) {
    const r = Math.random() * (max-min) + min;
    return Math.floor(r); 
}
const min = 300;
const max = 1920;
let rand1 = random(min, max);
let rand2 = random(min, max);
console.log('Largura:',rand1);
console.log('Altura:',rand2);
//Função acima: gerar números aleatorios;

//Função simplificada
function ePaisagem(x, y) {
    return x > y ;
}
console.log('Modo paisagem função =',ePaisagem(rand1, rand2))

//Função "Arrow function"

const ePaisagem2 = (x, y) => x > y ;

console.log('Modo paisagem arrow function =',ePaisagem2(rand1, rand2))
