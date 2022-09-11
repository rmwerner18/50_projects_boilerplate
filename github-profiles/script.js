const APIURL = 'https://api.github.com/users/'
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

form.addEventListener('submit', e => {
    e.preventDefault()

    let username = search.value

    if (username) {
        getUser(username)
        search.value = ''
    } 
})

async function getUser(username) { 
    try {
        const { data } = await axios(APIURL + username)
        createUserCard(data)
        getRepos(username)
    } catch(err) {
        createErrorCard('Could not find any users with that username')
    }
}

async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + '/repos?sort=created')
        addReposToCard(data)
    } catch(err) {
        console.log(err)
        createErrorCard('Problem fetching repos')
    }
}

function createUserCard(data) {
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
                <div id="repos"></div>
            </div>
        </div>
    `

    main.innerHTML = cardHTML
}

function addReposToCard(repos) {
    const reposDiv = document.getElementById('repos')
    console.log(repos)
    repos
        .slice(0, 10)
        .forEach(repo => {
            const repoLink = document.createElement('a')
            repoLink.classList.add('repo')
            repoLink.href = repo.html_url
            repoLink.target = '_blank'
            repoLink.innerHTML = repo.name

            reposDiv.appendChild(repoLink)
        })
}

function createErrorCard(message) {
    const cardHTML = `
        <div class="card">
            <h1>${message}</h1>
        </div>
    `
    main.innerHTML = cardHTML
}