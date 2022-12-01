'use strict'

const openModal = () => document.getElementById('modal').classList.add('active');

const closeModal = () => document.getElementById('modal').classList.remove('active');

const tempClient = {
    nome: "Rafael",
    email: "franca.jv@hotmail.com",
    phone: "11998132120",
    city: "São Paulo"
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? [];
const setLocalStorage = (dbClient) => localStorage.setItem('db_client', JSON.stringify(dbClient));

//CRUD - Create Read Update Delete

//CRUD - Create
const createClient = (client) => {
    const dbClient = getLocalStorage();
    dbClient.push(client);
    setLocalStorage(dbClient);
}


// EVENTOS
document.getElementById('cadastrarCliente').addEventListener('click', openModal);

document.getElementById('modalClose').addEventListener('click', closeModal);