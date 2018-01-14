const buttonPeople = document.querySelector('#buttonPeople');
const buttonPlanets = document.querySelector('#buttonPlanets');
const buttonFilms = document.querySelector('#buttonFilms');
const buttonSpecies = document.querySelector('#buttonSpecies');
const buttonVehicles = document.querySelector('#buttonVehicles');
const buttonStarships = document.querySelector('#buttonStarships');

const containerCardsPeople = document.querySelector('#containerCardsPeople');
const containerCardsPlanets = document.querySelector('#containerCardsPlanets');
const containerCardsFilms = document.querySelector('#containerCardsFilms');
const containerCardsSpecies = document.querySelector('#containerCardsSpecies');
const containerCardsVehicles = document.querySelector('#containerCardsVehicles');
const containerCardsStarships = document.querySelector('#containerCardsStarships');







buttonPeople.addEventListener('click', people);
buttonPlanets.addEventListener('click', planets);
buttonFilms.addEventListener('click', films);
buttonSpecies.addEventListener('click', species);
buttonVehicles.addEventListener('click', vehicles);
buttonStarships.addEventListener('click', starships);
