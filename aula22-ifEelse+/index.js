/* if () {}  ...............SE
testa SE a condição é verdadeira, se for verdadeira ela retorna o valor true e executa.
Pode ser executado sozinho para coisas muito simples

Pode ter varios else ifs na checagem
O comando segue o seguinte padrão:  
if (condição de teste) { função executada no bloco }

  else if () {}  ............se não   
Continua a função se o if não for executado
Vem sempre após um if
 
   else () {}; ................ou se
  Necessario para fechar um if statement, executa se nenhuma outra condição for atendida.
  Só pode ter um else na checagem

Podemos usar condições sem else if, utilizando apenas if e else na checagem.
*/


const hora = 19;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde')
} else if ( hora >= 18 && hora <= 23) {
    console.log('Boa noite')
} else {
  console.log('Olá!');
};