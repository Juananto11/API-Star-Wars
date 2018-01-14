const vehicles = () => {
  const containerVehicles = document.querySelector('#containerVehicles')
  const request = new XMLHttpRequest();
  const selectVehicles = document.querySelector('#selectVehicles');
  const container = document.querySelector('#container');

  container.setAttribute('class', 'invisible');
  const setCard = (json, i) => {
    let card = document.createElement('div');
    let imagenes = [
      './assets/img/vehicles/sand.jpg',
      './assets/img/vehicles/t-16.jpg',
      './assets/img/vehicles/x-34.jpg',
      './assets/img/vehicles/tie-ln.jpg',
      './assets/img/vehicles/snowspeeder.jpg',
      './assets/img/vehicles/tie-bomber.png',
      './assets/img/vehicles/at-at.jpg',
      './assets/img/vehicles/at-st.jpg',
      './assets/img/vehicles/storm.jpg',
      './assets/img/vehicles/sail.jpg'
    ];

    let info = `
      <img src="${imagenes[i]}" alt="" />
      <h2><span class="etiqueta">Nombre:</span> ${json[i].name}</h2>
      <p><span class="etiqueta">Modelo:</span> ${json[i].model}</p>
      <p><span class="etiqueta">Fabricante:</span> ${json[i].manufacturer}</p>
      <p><span class="etiqueta">Capacidad:</span> ${json[i].cargo_capacity}</p>
      <p><span class="etiqueta">Pasajeros:</span> ${json[i].passengers}</p>`;

    containerCardsVehicles.appendChild(card);
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
      for (let i = 0; i < cardLong; i++){
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
    if (containerCardsStarships.childNodes.length > 0) {
      for (let i = 0; i < cardLong; i++){
        containerCardsStarships.removeChild(card[i]);
      }
    }
    if (containerCardsVehicles.childNodes.length > 0) {
      for (let i = 0; i < cardLong; i++) {
        containerCardsVehicles.removeChild(card[i]);
      }
    }
  };

  const star = (selectVehicles) => {
    if (request.status == 200) {
      let card = document.querySelectorAll('.card');
      let cardLong = card.length
      let json = JSON.parse(request.responseText).results;
      let long = json.length;
      if (selectVehicles.value == 'all' || selectVehicles.value == undefined) {
        if (cardLong != 0) {
          removeCard(card, cardLong);
        }
        for (let i = 0; i < long; i++) {
          setCard(json, i);
        }
      } else if (selectVehicles.value == 'sand') {
        removeCard(card, cardLong);
        setCard(json, 0)
      } else if (selectVehicles.value == 't-16') {
        removeCard(card, cardLong);
        setCard(json, 1)
      } else if (selectVehicles.value == 'x-34') {
        removeCard(card, cardLong);
        setCard(json, 2)
      } else if (selectVehicles.value == 'tie-ln') {
        removeCard(card, cardLong);
        setCard(json, 3)
      } else if (selectVehicles.value == 'snowspeeder') {
        removeCard(card, cardLong);
        setCard(json, 4)
      } else if (selectVehicles.value == 'tie-bomber') {
        removeCard(card, cardLong);
        setCard(json, 5)
      } else if (selectVehicles.value == 'at-at') {
        removeCard(card, cardLong);
        setCard(json, 6)
      } else if (selectVehicles.value == 'at-st') {
        removeCard(card, cardLong);
        setCard(json, 7)
      } else if (selectVehicles.value == 'storm') {
        removeCard(card, cardLong);
        setCard(json, 8)
      } else if (selectVehicles.value == 'sail') {
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
  containerVehicles.setAttribute('class', 'visible');
  containerStarships.setAttribute('class', 'invisible');
  request.onload = star;
  request.onerror = starError;
  request.open('GET', 'https://swapi.co/api/vehicles');
  request.send();

  selectVehicles.addEventListener('change', () => {star(selectVehicles)});
};
