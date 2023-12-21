// TUDO que acontece dentro do NAVEGADOR é um evento
/*
const nome ='Luiz'; // escopo global

function qualquer() {
                    // escopo privado da função
} */
// Para pegar a classe do formulário criada no html, declaramos a variavel na função e atribuimos a classe a partir do comando document.querySelector();
// para selecionar o elemento pela classe se usa o ponto final antes da classe ex: documento.querySelector('.classe');
// para selecionar o elemento pelo id se usar o HashTag antes do id ex: document.querySelector('#id');
// Para iniciar um evento a partir de alguma variavel se usa o ponto final apos a declaração, ex:  form.onsubmit = function (evento) { };
//preventDefault(); comando que impede que a pagina seja atualizada automaticamente
// Maneira mais atualizada para se fazer um contador de eventos!!
//addEventListener();             
// Voce precisa declarar onde você devera buscar pelo evento e usar o ponto final para usar o comando, dentro do metodo() você colocara qual tipo de evento iniciara o comando dentro de aspas, e apois isso qual sera a função feita ao evento ser iniciado, ex
// form.addEventListener('submit', recebeEventoForm);
// Sempre que quiser ver o input usar .value depois da variavel
// INPUT é o valor armazena na memoria da variavel


function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];
 
    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value 
        }); // aqui adicionamos um objeto por indice do array
        
        console.log(pessoas);
        
        resultado.innerHTML += `${nome.value} ${sobrenome.value}` + ` ${peso.value}KG ${altura.value}Cm<br/>`        
    }
    form.addEventListener('submit', recebeEventoForm);
    
   
}
meuEscopo();

 //form.onsubmit = function (evento) {
    //    evento.preventDefault();
    //    alert(1);
    //    console.log('foi enviado');
    //}