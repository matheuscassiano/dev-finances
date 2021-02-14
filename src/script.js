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

const trasactions = [
    {
        id: 1,
        description: "Luz",
        amount: -50000,
        date: "14/01/2021",
    },
    {
        id: 2,
        description: "Luz",
        amount: -50000,
        date: "14/01/2021",
    },
    {
        id: 3,
        description: "Luz",
        amount: -50000,
        date: "14/01/2021",
    }
];

const Trasactions = {
  incomes: () => {},
  expenses: () => {},
  total: (incomes, expenses) => incomes - expenses,
};
