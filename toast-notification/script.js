const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'message1',
    'message2',
    'message3',
    'message4',
    'message5',
]

let messageIdx = 0

button.addEventListener('click', () => {
    let toast = document.createElement('div')
    toast.classList.add('toast')
    toast.innerText = messages[messageIdx]
    toasts.appendChild(toast)
    messageIdx === 4 ? messageIdx = 0 : messageIdx++

    setTimeout(() => removeToast(toast), 3000)
})

function removeToast(toast) {
    toasts.removeChild(toast)
}