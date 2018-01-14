const films = () => {
  const containerFilms = document.querySelector('#containerFilms')
  const request = new XMLHttpRequest();
  const selectFilms = document.querySelector('#selectFilms');
  const container = document.querySelector('#container');

  container.setAttribute('class', 'invisible');
  const setCard = (json, i) => {
    let card = document.createElement('div');
    let imagenes = [
      './assets/img/films/4.jpg',
      './assets/img/films/2.jpg',
      './assets/img/films/1.jpg',
      './assets/img/films/3.jpg',
      './assets/img/films/6.jpg',
      './assets/img/films/5.jpg',
      './assets/img/films/7.jpg',
    ];

    let info = `
      <img src="${imagenes[i]}" alt="" />
      <h2><span class="etiqueta">Titulo:</span> ${json[i].title}</h2>
      <p><span class="etiqueta">Director:</span> ${json[i].director}</p>
      <p><span class="etiqueta">Productor:</span> ${json[i].producer}</p>
      <p><span class="etiqueta">Lanzamiento:</span> ${json[i].release_date}</p>
      <p><span class="etiqueta">Opening:</span> ${json[i].opening_crawl}</p>`;

    containerCardsFilms.appendChild(card);
    card.setAttribute('class', 'card');
    card.innerHTML = info;
  };

  const removeCard = (card, cardLong) => {
    if (containerCardsPeople.childNodes.length > 0) {
      for (let i = 0; i < cardLong; i++){
        containerCardsPeople.removeChild(card[i]);
      }
    }
    if (containerCardsPlanets.childNodes.length > 0) {
      for (let i = 0; i < cardLong; i++) {
        containerCardsPlanets.removeChild(card[i]);
      }
    }
    if (containerCardsFilms.childNodes.length > 0) {
      for (let i = 0; i < cardLong; i++){
        containerCardsFilms.removeChild(card[i]);
      }
    }
    if (containerCardsSpecies.childNodes.length > 0) {
      for (let i = 0; i < cardLong; i++){
        containerCardsSpecies.removeChild(card[i]);
      }
    }
    if (containerCardsVehicles.childNodes.length > 0) {
      for (let i = 0; i < cardLong; i++){
        containerCardsVehicles.removeChild(card[i]);
      }
    }
    if (containerCardsStarships.childNodes.length > 0) {
      for (let i = 0; i < cardLong; i++){
        containerCardsStarships.removeChild(card[i]);
      }
    }
  };

  const star = (selectFilms) => {
    if (request.status == 200) {
      let card = document.querySelectorAll('.card');
      let cardLong = card.length
      let json = JSON.parse(request.responseText).results;
      let long = json.length;
      if (selectFilms.value == 'all' || selectFilms.value == undefined) {
        if (cardLong != 0) {
          removeCard(card, cardLong);
        }
        for (let i = 0; i < long; i++) {
          setCard(json, i);
        }
      } else if (selectFilms.value == '4') {
        removeCard(card, cardLong);
        setCard(json, 0)
      } else if (selectFilms.value == '2') {
        removeCard(card, cardLong);
        setCard(json, 1)
      } else if (selectFilms.value == '1') {
        removeCard(card, cardLong);
        setCard(json, 2)
      } else if (selectFilms.value == '3') {
        removeCard(card, cardLong);
        setCard(json, 3)
      } else if (selectFilms.value == '6') {
        removeCard(card, cardLong);
        setCard(json, 4)
      } else if (selectFilms.value == '5') {
        removeCard(card, cardLong);
        setCard(json, 5)
      } else if (selectFilms.value == '7') {
        removeCard(card, cardLong);
        setCard(json, 6)
      }
    } else {
      console.log('no');
    }
  };

  const starError = (error) => {
    console.log('No se puede conectar al API');
  };

  containerPeople.setAttribute('class', 'invisible');
  containerPlanets.setAttribute('class', 'invisible');
  containerFilms.setAttribute('class', 'visible');
  containerSpecies.setAttribute('class', 'invisible');
  containerVehicles.setAttribute('class', 'invisible');
  containerStarships.setAttribute('class', 'invisible');
  request.onload = star;
  request.onerror = starError;
  request.open('GET', 'https://swapi.co/api/films');
  request.send();

  selectFilms.addEventListener('change', () => {star(selectFilms)});
};
