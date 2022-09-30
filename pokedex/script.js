const pokeContainer = document.getElementById('poke-container')
const pokemonCount = 150

const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}



const fetchPokemons = () => {
    for(let i = 1; i <= pokemonCount; i++) {
        const pokemon = getPokemon(i)
    }
}

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createCard(data)
}


const createCard = (pokemon) => {
    console.log(pokemon)
    let card = document.createElement('div')
    card.className = 'pokemon'
    card.style.backgroundColor = colors[pokemon.types[0].type.name]
    card.innerHTML = `
        <div class="img-container">
            <img src="${pokemon.sprites.front_default}" alt="">
        </div>
        <div class="info">
            <span class="number">${pokemon.id}</span>
            <h3 class="name">${pokemon.name}</h3>
            <small class="type">Type <span>${pokemon.types[0].type.name}</span></small>
        </div>
    `


    pokeContainer.appendChild(card)
}

fetchPokemons()