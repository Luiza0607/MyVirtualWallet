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

const secondPanel = () => {
	transactionSection.style.display = 'flex';
}

const clousePanel = () => {
	transactionSection.style.display = 'none';
	clearInputs();
}


const checkForm = () => {

	if (nameInput.value !== '' && amountInput.value !== '' && categorySelect.value !== 'none') {
		newTransaction();
	} else {
		alert('error!');
	}
}

const clearInputs = () => {
	nameInput.value = '';
	amountInput.value = '';
	categorySelect.selectedIndex = 0;
}

const newTransaction = () => {
	const transacion = document.createElement('div');
	transacion.classList.add('transaction');
	transacion.setAttribute('id', ID);
	checkCategory(selectedCategory);

	transacion.innerHTML = `
	<p class="transaction-item">${nameInput.value} ${iconCategory}</p>
	<p class="transaction-amount">${amountInput.value}PLN 
	<button class="delete" onclick="deleteTransatcion(${ID})"><i class="fa-solid fa-trash-can"></i></button></p>
	`;

	amountInput.value > 0 ? earningsSection.appendChild(transacion) && transacion.classList.add('earnings') :
		expensitureSection.appendChild(transacion) && transacion.classList.add('expenditure');


	moneyArr.push(parseFloat(amountInput.value));
	countMoney(moneyArr)
	clousePanel();
	ID++;
	clearInputs();

}

const selectCategory = () => {
	selectedCategory = categorySelect.options[categorySelect.selectedIndex].text;
}

const checkCategory = (transacion) => {
	switch (transacion) {
		case '(+) Earnings': iconCategory = '<i class="fa-solid fa-sack-dollar"></i>';
			break;
		case '(+) Bonus': iconCategory = '<i class="fa-regular fa-money-bill-1"></i>';
			break;
		case '(-) Shopping': iconCategory = '<i class="fa-solid fa-shirt"></i>';
			break;
		case '(-) Theater': iconCategory = '<i class="fa-solid fa-masks-theater"></i>';
			break;
		case '(-) Food': iconCategory = '<i class="fa-solid fa-utensils"></i>';
			break;
		case '(-) Cosmetics': iconCategory = '<i class="fa-solid fa-spa"></i>';
			break;
	}
}

const countMoney = almoney => {
	const newMoney = almoney.reduce((x, y) => x + y);
	availableMoney.textContent = `${newMoney} PLN`;
}

const deleteTransatcion = id => {
	const transactionToDelete = document.getElementById(id);
	const transactionAmount = parseFloat(transactionToDelete.childNodes[3].innerText);
	const indexOfTransaction = moneyArr.indexOf(transactionAmount);


	moneyArr.splice(indexOfTransaction, 1)

	transactionToDelete.classList.contains('earnings') ? earningsSection.removeChild(transactionToDelete)
		: expensitureSection.removeChild(transactionToDelete)

	countMoney(moneyArr)
}

const deleteAllTransactions = () => {
	earningsSection.innerHTML = '<h3>My earnings</h3>';
	expensitureSection.innerHTML = '<h3>My expenditure</h3>';
	availableMoney.innerHTML = '0 PLN'
	moneyArr = [0];
}

addTransaction.addEventListener('click', secondPanel);
cancelBtn.addEventListener('click', clousePanel);
saveBtn.addEventListener('click', checkForm);
deleteAllBtn.addEventListener('click', deleteAllTransactions);