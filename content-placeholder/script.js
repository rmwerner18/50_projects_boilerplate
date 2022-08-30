const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profileImg = document.getElementById('profile_img')
const nameDiv = document.getElementById('name')
const date = document.getElementById('date')

const animatedBgs = document.querySelectorAll('.animated-bg')
const animatedBgTexts = document.querySelectorAll('.animated-bg-text')

function displayContent() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1661431905234-81f04f375dbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" class="image">'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, natus?'
    profileImg.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">'
    nameDiv.innerHTML = 'John Doe'
    date.innerHTML = 'Sept 30, 2022'

    animatedBgs.forEach(bg => {
        bg.classList.remove('animated-bg')
    })


    animatedBgTexts.forEach(bg => {
        bg.classList.remove('animated-bg-text')
    })
}

setTimeout(displayContent, 2500)