const APIURL = 'https://api.github.com/users/'
const form = document.getElementById('form')
const search = document.getElementById('search')
const nameHeader = document.querySelector('user-info h2')

const abc = getUser('rmwerner18')
console.log(abc)

async function getUser(username) { 
    try {
        const { data } = await axios(APIURL + username)
    
        // console.log(data)
        return data
    } catch(err) {
        console.log(err)
    }
}

form.addEventListener('submit', e => {
    e.preventDefault()

    let username = search.value

    if (username) {
        user = getUser(username)

        search.value = ''
        console.log(user)
        showData(user)

    } 
})

function showData(user) {
    console.log(user.name)
    nameHeader.innerHTML = user.login
}