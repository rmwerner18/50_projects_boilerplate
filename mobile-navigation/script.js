const contents = document.querySelectorAll('.content')
const lis = document.querySelectorAll('li')

lis.forEach((li, i) => {
 li.addEventListener('click', () => {
  addClassToEl('active', lis, li)
  addClassToEl('show', contents, contents[i])
 })
})

function addClassToEl(className, list, listItem) {
 list.forEach(item => {
  item.classList.remove(className)
 })
 listItem.classList.add(className)
}