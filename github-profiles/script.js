const APIURL = 'https://api.github.com/users/'
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

async function getUser(username) { 
    try {
        const { data } = await axios(APIURL + username)
    
        createUserCard(data)
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
    } 
})

function createUserCard(user) {
    const { name, avatar_url, bio, followers, following, public_repos } = user
    const cardHTML = `
        <div class="card">
            <div>
                <img class="avatar" src=${avatar_url} alt="">
            </div>
            <div class="user-info">
                <h2>${name}</h2>
                <p>${bio}</p>
                <ul>
                    <li>${followers} <strong>Followers</strong></li>
                    <li>${following} <strong>Following</strong></li>
                    <li>${public_repos} <strong>Repos</strong></li>
                </ul>
                <div id="repos">
                    <a href="#" class="repo">Repo 1</a>
                    <a href="#" class="repo">Repo 2</a>
                    <a href="#" class="repo">Repo 3</a>
                </div>
            </div>
        </div>
    `

    main.innerHTML = cardHTML
}