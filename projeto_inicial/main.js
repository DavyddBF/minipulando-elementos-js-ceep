import botaoConclui from "./componentes/concluiTarefa.js";
import botaoDeleta from "./componentes/deletaTarefas.js";

const criarTarefa = (evento) => {
    
    evento.preventDefault();

    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const tarefa = document.createElement('li');
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${valor}</p>`;

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(botaoDeleta());
    lista.appendChild(tarefa);
    input.value = " ";
}

const novaTarefa = document.querySelector('[data-form-button]');

//()=> "Ação anonima"
novaTarefa.addEventListener('click', criarTarefa);