const background = document.getElementById('background')
const password = document.getElementById('password')

password.addEventListener('input', e => {
 const value = 20-e.target.value.length
 background.style.filter = `blur(${value}px)`
})