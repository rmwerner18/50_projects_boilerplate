const loveMe = document.querySelector('.love-me')
const time = document.getElementById('time')

loveMe.addEventListener('dblclick', e => addLove(e))


function addLove(e) {
    console.log(e)
    console.log(e.offsetY)
    console.log(e.offsetX)

    let heart = document.createElement('i')
    heart.className = 'fas fa-heart'
    heart.style.top = e.offsetY + 'px'
    heart.style.left = e.offsetX + 'px'

    loveMe.appendChild(heart)

    setTimeout(() => {
        loveMe.removeChild(heart)
    }, 600)

    addCount()
}

function addCount() {
    let count = parseInt(time.innerHTML)
    count++
    time.innerHTML = count
}