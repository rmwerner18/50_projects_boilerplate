const nav = document.querySelector('.nav')
const navLinks = document.querySelectorAll('li a')
window.addEventListener('scroll', fixNav)

console.log(navLinks)

navLinks.forEach(link => {
    link.addEventListener('click', () => toggleLinks(link))
})

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

function toggleLinks(link) {
    navLinks.forEach(l => {
        l.classList.remove('current')
    })
    link.classList.add('current')
}
