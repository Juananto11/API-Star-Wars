const starships = () => {
  const containerStarships = document.querySelector('#containerStarships')
  const request = new XMLHttpRequest();
  const selectStarships = document.querySelector('#selectStarships');
  const container = document.querySelector('#container');

  container.setAttribute('class', 'invisible');
  const setCard = (json, i) => {
    let card = document.createElement('div');
    let imagenes = [
      './assets/img/starships/executor.jpg',
      './assets/img/starships/sentinel.jpg',
      './assets/img/starships/death.jpg',
      './assets/img/starships/millennium.jpg',
      './assets/img/starships/y-wing.jpg',
      './assets/img/starships/x-wing.jpg',
      './assets/img/starships/tie-advance.jpg',
      './assets/img/starships/slave.ico',
      './assets/img/starships/imperial.jpg',
      './assets/img/starships/ef76.jpg'
    ];

    let info = `
      <img src="${imagenes[i]}" alt="" />
      <h2><span class="etiqueta">Nombre:</span> ${json[i].name}</h2>
      <p><span class="etiqueta">Diametro:</span> ${json[i].diameter}</p>
      <p><span class="etiqueta">Clima:</span> ${json[i].climate}</p>
      <p><span class="etiqueta">Gravedad:</span> ${json[i].gravity}</p>
      <p><span class="etiqueta">Población:</span> ${json[i].population}</p>`;

    containerCardsStarships.appendChild(card);
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

  const star = (selectStarships) => {
    if (request.status == 200) {
      let card = document.querySelectorAll('.card');
      let cardLong = card.length
      let json = JSON.parse(request.responseText).results;
      let long = json.length;
      if (selectStarships.value == 'all' || selectStarships.value == undefined) {
        if (cardLong != 0) {
          removeCard(card, cardLong);
        }
        for (let i = 0; i < long; i++) {
          setCard(json, i);
        }
      } else if (selectStarships.value == 'executor') {
        removeCard(card, cardLong);
        setCard(json, 0)
      } else if (selectStarships.value == 'sentinel') {
        removeCard(card, cardLong);
        setCard(json, 1)
      } else if (selectStarships.value == 'death') {
        removeCard(card, cardLong);
        setCard(json, 2)
      } else if (selectStarships.value == 'millennium') {
        removeCard(card, cardLong);
        setCard(json, 3)
      } else if (selectStarships.value == 'y-wing') {
        removeCard(card, cardLong);
        setCard(json, 4)
      } else if (selectStarships.value == 'x-wing') {
        removeCard(card, cardLong);
        setCard(json, 5)
      } else if (selectStarships.value == 'tie-advance') {
        removeCard(card, cardLong);
        setCard(json, 6)
      } else if (selectStarships.value == 'slave') {
        removeCard(card, cardLong);
        setCard(json, 7)
      } else if (selectStarships.value == 'imperial') {
        removeCard(card, cardLong);
        setCard(json, 8)
      } else if (selectStarships.value == 'ef76') {
        removeCard(card, cardLong);
        setCard(json, 9)
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
  containerFilms.setAttribute('class', 'invisible');
  containerSpecies.setAttribute('class', 'invisible');
  containerVehicles.setAttribute('class', 'invisible');
  containerStarships.setAttribute('class', 'visible');
  request.onload = star;
  request.onerror = starError;
  request.open('GET', 'https://swapi.co/api/starships');
  request.send();

  selectStarships.addEventListener('change', () => {star(selectStarships)});
};
