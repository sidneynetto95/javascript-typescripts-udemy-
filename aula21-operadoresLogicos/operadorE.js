/* operador E
&&
Todas as expressões precisam ser verdadeiras para que retorne true
Caso teste dados de tipos diferentes, ele testara todos os valores e retornara o último valor 
VALORES AVALIADOS EM FALSY NO JAVA SCRIPT
    false
    0
    ' STRING VAZIA '
    null / undefined
    NaN
   (Qualquer valor diferente dos acimas são avaliados como true )
AVALIAÇÃO DE CIRCUITO: Testa se todas as expressões vão verdadeiras e se sim retorna a ultima expressão, podendo como exemplo 1;
*/ 

//exemplo1
function falaOi () {
    return 'Oi';
}

const vaiExecutar = 'Sidney';
console.log(vaiExecutar && falaOi());