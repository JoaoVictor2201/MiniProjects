'use strict'

const openModal = () => document.getElementById('modal').classList.add('active');

const closeModal = () => document.getElementById('modal').classList.remove('active');

const tempClient = {
    nome: "Gabriel",
    email: "gabs@hotmail.com",
    phone: "11998132120",
    city: "São Paulo"
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


// EVENTOS
document.getElementById('cadastrarCliente').addEventListener('click', openModal);

document.getElementById('modalClose').addEventListener('click', closeModal);