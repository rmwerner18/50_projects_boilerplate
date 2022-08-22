const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f79b1766f7b13db6dc8736e771e52f5a&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=f79b1766f7b13db6dc8736e771e52f5a&page=1&query="'
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

function showMovies(movies) {
    main.innerHTML = ''
    movies.forEach(movie => {
        const { title, vote_average, backdrop_path, overview } = movie
        const movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')

        movieDiv.innerHTML = `
        <img src="${IMG_PATH + backdrop_path}" alt="">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${overview}
        </div>
        `
        main.appendChild(movieDiv)
    })
}

function getClassByRate(rate) {
    if (rate >= 8) {
        return 'green'
    } else if (rate >= 5) {
        return 'orange'
    } else return 'red'
}

form.addEventListener('submit', e => {
    e.preventDefault()
    const searchTerm = search.value

    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        searchValue = ''
    } else {
        window.location.reload()
    }
})



// https://www.themoviedb.org/
// f79b1766f7b13db6dc8736e771e52f5a


// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzliMTc2NmY3YjEzZGI2ZGM4NzM2ZTc3MWU1MmY1YSIsInN1YiI6IjYzMDFhMGYxNWY0YjczMDA4MjY3ZGQ2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l0LL2fdw4eS_iF5-sog_a7UzT3N9EGP3zp7gexpU9P8