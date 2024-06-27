import Validation from './validation.js';

const nameEl = document.querySelector('#inputName');
const lastNameEl = document.querySelector('#inputLastName');
const emailEl = document.querySelector('#inputEmail');
const addressEl = document.querySelector('#inputAddress');
const addressNumberEl = document.querySelector('#inputAddress_number');
const courseEl = document.querySelector('#courseSelect option');

const name = new Validation('#inputName');
const lastName = new Validation('#inputLastName');
const email = new Validation('#inputEmail');
const address = new Validation('#inputAddress');
const addressNumber = new Validation('#inputAddress_number');
