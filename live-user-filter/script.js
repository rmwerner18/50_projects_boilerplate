const container = document.querySelector('.container')
const resultList = document.getElementById('result')
const filter = document.getElementById('filter')
const userLis = []

const fetchUsers = async () => {
 const result = await fetch('https://randomuser.me/api/?results=40')
 const json = await result.json()
 return json.results
}

const makeUserLis = async () => {

 const users = await fetchUsers()

 resultList.innerHTML = ''

 users.map(({ picture, name, location}) => {
  const userLi = document.createElement('li')
  userLi.innerHTML = `
    <img src=${picture.medium} alt=${name.first}>
    <div class="user-info">
     <h4>${name.first + ' ' + name.last}</h4>
     <p>${location.city + ', ' + location.country}</p>
    </div>
   `
   userLis.push(userLi)
   resultList.append(userLi)
 })

}

const filterData = (searchTerm) => {
 userLis.forEach(userLi => {
  if (userLi.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
   userLi.classList.remove('hide')
  } else {
   userLi.classList.add('hide')
  }
 })
}


filter.addEventListener('input', e => filterData(e.target.value))

makeUserLis()