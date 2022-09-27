const container = document.getElementById('container')

let colors = [
    'red',
    'blue',
    'yellow',
    'purple',
    'green',
    'orange'
]

for (let i = 0; i < 500; i++) {
    let square = document.createElement('div')
    square.className = 'square'
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = `${colors[Math.floor(Math.random() * 10)]}`
        setTimeout(() => {
            square.style.backgroundColor = '#1d1d1d'
        }, 100)
    })
    container.appendChild(square)
}