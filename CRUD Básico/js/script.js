'use strict'

const openModal = () => document.getElementById('modal').classList.add('active');

const closeModal = () => document.getElementById('modal').classList.remove('active');

const tempClient = {
    nome: "João",
    email: "franca.jv@hotmail.com",
    phone: "11998132120",
    city: "São Paulo"
}

//CRUD - Create Read Update Delete

const createClient = (client) => {
    localStorage.setItem("db_client", JSON.stringify(client));
}


// EVENTOS
document.getElementById('cadastrarCliente').addEventListener('click', openModal);

document.getElementById('modalClose').addEventListener('click', closeModal);