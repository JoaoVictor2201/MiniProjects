'use strict'

const openModal = () => document.getElementById('modal').classList.add('active');

const closeModal = () => document.getElementById('modal').classList.remove('active');

const tempClient = {
    name: 'Gabriel',
    email: 'gabs@hotmail.com',
    phone: '11998132120',
    city: 'São Paulo'
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? [];
const setLocalStorage = (dbClient) => localStorage.setItem('db_client', JSON.stringify(dbClient));

//CRUD - Create Read Update Delete

const readClient = () => getLocalStorage();

const createClient = (client) => {
    const dbClient = readClient();
    dbClient.push(client);
    setLocalStorage(dbClient);
}

const updateClient = (index, client) =>  {
    const dbClient = readClient();
    dbClient[index] = client;
    setLocalStorage(dbClient);
}

const deleteClient = (index) => {
    const dbClient = readClient();
    dbClient.splice(index, 1);
    setLocalStorage(dbClient);
}

//Interações de usuário
const fieldsFilled = () => {
    return document.getElementById('form').reportValidity();
}

const saveClient = () => {
    if (fieldsFilled()) {
        const client = {
            name: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('celular').value,
            city: document.getElementById('cidade').value
        }
        createClient(client);
        clearFields();
        closeModal();
    }
}

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field');
    fields.forEach(field => field.value = '');
}


// EVENTOS
document.getElementById('cadastrarCliente').addEventListener('click', openModal);
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('salvar').addEventListener('click', saveClient);