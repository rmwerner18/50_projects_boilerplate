const container = document.getElementById('container')

let colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

for (let i = 0; i < 500; i++) {
    let square = document.createElement('div')
    square.className = 'square'

    square.addEventListener('mouseover', () => {
        let color = colors[Math.floor(Math.random() * colors.length)]
        square.style.backgroundColor = `${color}`
        element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    })
    square.addEventListener('mouseout', () => {
        square.style.backgroundColor = '#1d1d1d'
        element.style.boxShadow = '0 0 2px #000'
    })
    
    container.appendChild(square)
}