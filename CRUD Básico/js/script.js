'use strict'


const OpenModal = () => document.getElementById('modal').classList.add('active');
const CloseModal = () => {
    ClearFields();
    document.getElementById('modal').classList.remove('active');
}

const GetLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? [];
const SetLocalStorage = (dbClient) => localStorage.setItem('db_client', JSON.stringify(dbClient));

//CRUD - Create Read Update Delete

const ReadClient = () => GetLocalStorage();

const CreateClient = (client) => {
    const dbClient = ReadClient();
    dbClient.push(client);
    SetLocalStorage(dbClient);
}

const UpdateClient = (index, client) =>  {
    const dbClient = ReadClient();
    dbClient[index] = client;
    SetLocalStorage(dbClient);
}

const DeleteClient = (index) => {
    const dbClient = ReadClient();
    dbClient.splice(index, 1);
    SetLocalStorage(dbClient);
}

//Interações de usuário
const FieldsFilled = () => {
    return document.getElementById('form').reportValidity();
}

const SaveClient = () => {
    if (FieldsFilled()) {
        const client = {
            name: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('celular').value,
            city: document.getElementById('cidade').value
        }
        CreateClient(client);
        CloseModal();
    }
}

const ClearFields = () => {
    const fields = document.querySelectorAll('.modal-field');
    fields.forEach(field => field.value = '');
}

const CreateTableRow = (client) => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${client.name}</td>
        <td>${client.email}</td>
        <td>${client.phone}</td>
        <td>${client.city}</td>
        <td>
            <button type="button" class="button green">editar</button>
            <button type="button" class="button red">excluir</button>
        </td>
    `
    document.querySelector('#tbClients tbody').appendChild(newRow);
}

const renderTable = () => {
    const dbClient = ReadClient();
    dbClient.forEach(CreateTableRow);
}

renderTable();

// EVENTOS
document.getElementById('cadastrarCliente').addEventListener('click', OpenModal);
document.getElementById('modalClose').addEventListener('click', CloseModal);
document.getElementById('cancelar').addEventListener('click', CloseModal);
document.getElementById('salvar').addEventListener('click', SaveClient);