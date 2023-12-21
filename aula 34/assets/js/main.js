function random(min, max) {
    const r = Math.random() * (max-min) + min;
    return Math.floor(r); 
}
function maximo(x,y) {
    if (x > y) {
        console.log('Num1:',x,'é maior que Num2:',y)
        return x;
    } 
        console.log('Num2:',y,' é maior que Num1:',x)
        return y;
    
}

const min = 1;
const max = 50;
let rand1 = random(min, max);
let rand2 = random(min, max);
console.log('Número 1:',rand1);
console.log('Número 2:',rand2);
console.log(maximo(rand1, rand2));

console.log('######################Simplificado');
function maxSimplificado(x, y) {
    return x > y ? x : y;
}

console.log(maxSimplificado(rand1, rand2));

console.log('######################ArrowFunction');
const max2 = (x,y) => x > y ? x : y;
console.log(max2(rand1, rand2));