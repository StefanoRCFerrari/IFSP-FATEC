//criar variáveis para pegar as referências dos elementos 

const campoTarefa = document.getElementById('campo-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

function adicionarTarefa(){
    const textoDaTarefa = campoTarefa.value.trim();

    if(textoDaTarefa === ""){
        alert("Por favor digite uma tarefa!!");
        campoTarefa.focus();
        return;
    }

    //criar novo item da lista

    const novoItemHTML = `<li class="item-lista" onclick="marcarComoConcluida(this)">
    <div class="tarefa">
    <div class="content-list">
        <span class="textp-tarefa">${textoDaTarefa}</span>
    </div>
        <button class="botao-rmv" onclick="removerTarefa(event, this)">Remover</button>
    </div>
    </li>
    `;

    listaTarefas.innerHTML += novoItemHTML;

    //limpar com texto

    campoTarefa.value = "";
    campoTarefa.focus();
}

function marcarComoConcluida(elemento){
    elemento.classList.toggle('tarefa-concluida')
}

function removerTarefa(evento, botao){
    evento.stopPropagation();

    //const itemParaRemover = botao.parentElement;
    const itemParaRemover = botao.closest('li');  // Usando closest para encontrar o li completo
    itemParaRemover.remove();
}

function verificarTecla(evento){
    if(evento.key === 'Enter'){
        adicionarTarefa();
    }
}