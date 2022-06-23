const listaTarefa = document.querySelector('#listaTarefa');
const tarefa = document.querySelector('#tarefa');
const botaoAdd = document.querySelector('#butTarefa');

botaoAdd.addEventListener('click', function(){
    const textoDaTarefa = tarefa.value;
    tarefa.value = '';
    listaTarefa.appendChild(addTarefa(textoDaTarefa));
    tarefa.focus();
});

function addTarefa(textoDaTarefa) {
    const elementLI = document.createElement('li');
    const elementSPAN = document.createElement('span');

    elementSPAN.setAttribute('id','tarefa2');
    elementSPAN.textContent = textoDaTarefa;

    elementLI.appendChild(elementSPAN);
    elementLI.appendChild(addBotaoRemover());

    return elementLI;
}

function addBotaoRemover() {
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = '×';
    botaoRemover.className = 'btnremover';

    botaoRemover.addEventListener('click', function() {
        listaTarefa.removeChild(this.parentNode);
    }

    )

    return botaoRemover;
}