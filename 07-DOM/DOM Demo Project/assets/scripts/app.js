const addMovieModal = document.getElementById('add-modal');
/*  could also use these methods to get a handle to the add movie button object
const addMovie = document.querySelector('header button');
const addMovie = document.querySelector('header').lastElementChild;
*/
const startAddMovieButton = document.querySelector('header button');
/*  could also use these methods to get a handle to the add-modal object
const addMovie = document.querySelector('#add-modal');
const addMovie = document.body.children[1];
*/
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling; // next element after the cancel button
const userInputs = addMovieModal.querySelectorAll('input');
// const userInputs = addMovieModal.getElementsByTagName('input');
const entryTextSection = document.getElementById('entry-text');

const movies = [];

const updateUI = () => {
  if (movies.length === 0)
  {
    entryTextSection.style.display = 'block'
  } else
  {
    entryTextSection.style.display = 'none';
  }
};

const renderNewMovieElement = (title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class ="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
}

const backdropToggleHandler = () => {
  backdrop.classList.toggle('visible');
  clearMovieInputs();
  updateUI();
};

const toggleMovieModalHandler = () => {
  addMovieModal.classList.toggle('visible');
  backdropToggleHandler();
};

cancelAddMovieHandler = () => {
  toggleMovieModalHandler();
  clearMovieInputs();
  updateUI();
};

const clearMovieInputs = () => {
  for (const usrInput of userInputs) {
    usrInput.value = '';
  }
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;
  if (
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('Invalid input');
    return;
  }
  const newMovie = {
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  };

  movies.push(newMovie);
  console.log(movies);
  toggleMovieModalHandler();
  clearMovieInputs();
  renderNewMovieElement(newMovie.title, newMovie.image, newMovie.rating);
  updateUI();
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

startAddMovieButton.addEventListener('click', toggleMovieModalHandler);
backdrop.addEventListener('click', toggleMovieModalHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
