const modal = {
    element: document.querySelector('.modal-overlay'),
    open: () => {
        modal.element.classList.add('active')
    },
    close: () => {
        modal.element.classList.remove('active')
    },
}

document.querySelector('.button.new').addEventListener('click', () => {
    modal.open()
})

document.querySelector('.button.cancel').addEventListener('click', () => {
    modal.close()
})