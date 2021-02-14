const Modal = {
  element: document.querySelector(".modal-overlay"),
  toggle: () => modal.element.classList.toggle("active"),
};

document.querySelector(".button.new").addEventListener("click", () => {
  modal.toggle();
});

document.querySelector(".button.cancel").addEventListener("click", () => {
  modal.toggle();
});

const transactions = [
    {
        id: 1,
        description: "Luz",
        amount: -50000,
        date: "14/01/2021",
    },
    {
        id: 2,
        description: "Luz",
        amount: 50000,
        date: "14/01/2021",
    },
    {
        id: 3,
        description: "Luz",
        amount: -50000,
        date: "14/01/2021",
    }
];

const Transactions = {
  incomes: () => {},
  expenses: () => {},
  total: (incomes, expenses) => incomes - expenses,
};

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),
    addTransaction: (transaction, index) => {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)
        DOM.transactionsContainer.appendChild(tr)
    },
    innerHTMLTransaction: ({ description, amount, date }) => {
        const html = `
        <td class="description">${description}</td>
        <td class="${amount < 0 ? 'expense' : 'income'}">R$ ${amount}</td>
        <td class="date">${date}</td>
        <td><img src="./src/assets/minus.svg" alt="Remover Transação"></td>
        `

        return html
    }
}

transactions.forEach((transaction, index) => {
    DOM.addTransaction(transaction, index)
})