/** @type {HTMLDialogElement} */
const dialog = document.querySelector('#dialog')

/** @type {HTMLImageElement} */
const dialogImg = document.querySelector('#dialog > img')

/** @type {HTMLButtonElement} */
const dialogBtn = document.querySelector('#dialog > button')


// dialog.showModal()

document.addEventListener('click', (event) => {
    const imgButton = event.target.closest('.image-button')
    if(!imgButton) return;
    const source = imgButton.dataset.source
    dialogImg.src = source
    dialog.showModal()
})

dialogBtn.addEventListener('click', (event) => {
    dialog.close();
})