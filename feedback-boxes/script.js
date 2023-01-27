const ratings = document.querySelectorAll('.rating');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
let selectedRating = 'Satisfied'

panel.addEventListener('click', (e) => {
  if (e.target.parentNode.classList.contains('rating')) {
    ratings.forEach((rating) => {
      rating.classList.remove('active')
    });
    e.target.parentNode.classList.add('active');
    selectedRating = e.target.nextElementSibling.innerHTML
  }
  if (e.target.classList.contains('btn')) {
    panel.innerHTML = `
      <i class='fas fa-heart'></i>
      <strong>Thank You</strong>
      <br/>
      <strong>Feedback: ${selectedRating}</strong>
      <p>We will use your feedback to improve our customer support.</p>
    `
  }
});
