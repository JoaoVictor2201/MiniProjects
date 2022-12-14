'use strict'

let banco = [
    { 'tarefa' : 'estudar JS', 'status' : '' },
    { 'tarefa' : 'netflix', 'status' : 'checked' },
]

// Criando uma tarefa
const CriarItem = (tarefa, status) => {
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = `
        <input type="checkbox" ${status}>
        <div>${tarefa}</div>
        <input type="button" value="X">
    `

    document.getElementById('todoList').appendChild(item);
}

const RenderTasks = () => {
    banco.forEach(item => CriarItem(item.tarefa, item.status));
}

RenderTasks();