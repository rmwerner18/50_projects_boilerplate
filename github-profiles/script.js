const APIURL = 'https://api.github.com/users/'
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

async function getUser(username) { 
    try {
        const { data } = await axios(APIURL + username)
        const repos = await axios(APIURL + username + '/repos')

        createUserCard(data, repos.data)
    } catch(err) {
        createErrorCard('Could not find any users with that username')
    }
}

form.addEventListener('submit', e => {
    e.preventDefault()

    let username = search.value

    if (username) {
        getUser(username)
        search.value = ''
    } 
})

function createUserCard(data, repos) {
    const { name, avatar_url, bio, followers, following, public_repos } = data
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
                    <a href="${repos[0].html_url}" class="repo">${repos[0].name}}</a>
                    <a href="#" class="repo">Repo 2</a>
                    <a href="#" class="repo">Repo 3</a>
                </div>
            </div>
        </div>
    `

    main.innerHTML = cardHTML
}

function createErrorCard(message) {
    const cardHTML = `
        <div class="card">
            <h1>${message}</h1>
        </div>
    `
    main.innerHTML = cardHTML
}