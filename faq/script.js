const btns = document.querySelectorAll('.faq-toggle')
const faq = document.querySelector('.faq')

console.log(btns)
console.log(faq)

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.classList.toggle('active')
    })
})
