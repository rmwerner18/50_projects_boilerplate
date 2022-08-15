const tagsEl = document.getElementById('tags')
const textarea = document.querySelector('textarea')

textarea.focus()

textarea.addEventListener('keyup', e => {
    createTags(e.target.value)
})

function createTags (input) {
    const tags = input.split(',')
    .filter(tag => tag.trim() !== '')
    .map(tag => tag.trim())

    tagsEl.innerHTML = ''
    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

window.addEventListener('keydown', e => {
    if(e.key == 'Enter') {
        setInterval(20, shuffleTags())
        
    }
})

function shuffleTags () {

}