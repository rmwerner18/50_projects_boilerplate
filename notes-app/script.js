const addBtn = document.getElementById('add')

addBtn.addEventListener('click', () => {
    let note = document.createElement('div')
    note.className = 'note'
    note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main"></div>
    <textarea></textarea>
    `

    document.querySelector('body').appendChild(note)
})