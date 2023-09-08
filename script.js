const earningsSection = document.querySelector('.earnings-area');
const expensitureSection = document.querySelector('.expenditure-area');
const availableMoney = document.querySelector('.available-money');
const transactionSection = document.querySelector('.add-transaction-panel');


const nameInput = document.querySelector('#name');
const amountInput = document.querySelector('#amount');
const categorySelect = document.querySelector('#category');

const addTransaction = document.querySelector('.add-transaction');
const deleteAllBtn = document.querySelector('.delete-transactions');
const deleteBtn = document.querySelector('.delete')
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');

let ID = 0;
let iconCategory;
let selectedCategory;
let moneyArr = [0];


