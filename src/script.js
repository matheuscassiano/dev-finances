const modal = {
    element: document.querySelector('.modal-overlay'),
    toggle: () => modal.element.classList.toggle('active'),
}

document.querySelector('.button.new').addEventListener('click', () => {
    modal.toggle()
})

document.querySelector('.button.cancel').addEventListener('click', () => {
    modal.toggle()
})