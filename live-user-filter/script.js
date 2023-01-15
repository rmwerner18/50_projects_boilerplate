const container = document.querySelector('.container')
const resultList = document.getElementById('result')
const filter = document.getElementById('filter')
const userLis = []

const fetchUsers = async () => {
 const result = await fetch('https://randomuser.me/api/?results=40')
 console.log('MAKE API CALL')
 const json = await result.json()
 return json.results
 // json.results.forEach(user => users.push(user))
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
 console.log(searchTerm)
 console.log(userLis)
 userLis.forEach(userLi => {
  console.log(userLi.innerText)
  if (userLi.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
   userLi.classList.remove('hide')
  } else {
   userLi.classList.add('hide')
  }
 })
}


filter.addEventListener('input', e => filterData(e.target.value))

makeUserLis()