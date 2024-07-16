const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
})

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText ='Apagar';
    botaoApagar.setAttribute('class', 'apagar'); 
    botaoApagar.setAttribute('title', 'Apagar esta tarefa'); 
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvaTarefas();
}

btnTarefa.addEventListener('click', function(){
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
})

document.addEventListener('click', function(e){ //função que pega qual elemento(botão,foto,icone e etc) está sendo clicado
    const el = e.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvaTarefas();
    }
})

function salvaTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
       let tarefaTexto = tarefa.innerText;
       tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); //o trim serve para remover espaços em branco depois do ultimo caractere da string
       listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON =JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
};

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    
    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
};

adicionaTarefasSalvas();

