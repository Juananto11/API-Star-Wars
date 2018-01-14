const planets = () => {
  const containerPlanets = document.querySelector('#containerPlanets')
  const request = new XMLHttpRequest();
  const selectPlanets = document.querySelector('#selectPlanets');
  const container = document.querySelector('#container');

  container.setAttribute('class', 'invisible');
  const setCard = (json, i) => {
    let card = document.createElement('div');
    let imagenes = [
      './assets/img/planets/alderaan.jpg',
      './assets/img/planets/yavin.jpg',
      './assets/img/planets/hoth.jpg',
      './assets/img/planets/dagobah.jpg',
      './assets/img/planets/bespin.jpg',
      './assets/img/planets/endor.jpg',
      './assets/img/planets/naboo.jpg',
      './assets/img/planets/coruscant.jpg',
      './assets/img/planets/kamino.jpg',
      './assets/img/planets/geonosis.jpg'
    ];

    let info = `
      <img src="${imagenes[i]}" alt="" />
      <h2><span class="etiqueta">Nombre:</span> ${json[i].name}</h2>
      <p><span class="etiqueta">Diametro:</span> ${json[i].diameter}</p>
      <p><span class="etiqueta">Clima:</span> ${json[i].climate}</p>
      <p><span class="etiqueta">Gravedad:</span> ${json[i].gravity}</p>
      <p><span class="etiqueta">Población:</span> ${json[i].population}</p>`;

    containerCardsPlanets.appendChild(card);
    card.setAttribute('class', 'card');
    card.innerHTML = info;
  };

  const removeCard = (card, cardLong) => {
    if (containerCardsPeople.childNodes.length > 0) {
      for (let i = 0; i < cardLong; i++){
        containerCardsPeople.removeChild(card[i]);
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
    if (containerCardsPlanets.childNodes.length > 0) {
      for (let i = 0; i < cardLong; i++) {
        containerCardsPlanets.removeChild(card[i]);
      }
    }
  };

  const star = (selectPlanets) => {
    if (request.status == 200) {
      let card = document.querySelectorAll('.card');
      let cardLong = card.length
      let json = JSON.parse(request.responseText).results;
      let long = json.length;
      if (selectPlanets.value == 'all' || selectPlanets.value == undefined) {
        if (cardLong != 0) {
          removeCard(card, cardLong);
        }
        for (let i = 0; i < long; i++) {
          setCard(json, i);
        }
      } else if (selectPlanets.value == 'alderaan') {
        removeCard(card, cardLong);
        setCard(json, 0)
      } else if (selectPlanets.value == 'yavin') {
        removeCard(card, cardLong);
        setCard(json, 1)
      } else if (selectPlanets.value == 'hoth') {
        removeCard(card, cardLong);
        setCard(json, 2)
      } else if (selectPlanets.value == 'dagobah') {
        removeCard(card, cardLong);
        setCard(json, 3)
      } else if (selectPlanets.value == 'bespin') {
        removeCard(card, cardLong);
        setCard(json, 4)
      } else if (selectPlanets.value == 'endor') {
        removeCard(card, cardLong);
        setCard(json, 5)
      } else if (selectPlanets.value == 'naboo') {
        removeCard(card, cardLong);
        setCard(json, 6)
      } else if (selectPlanets.value == 'coruscant') {
        removeCard(card, cardLong);
        setCard(json, 7)
      } else if (selectPlanets.value == 'kamino') {
        removeCard(card, cardLong);
        setCard(json, 8)
      } else if (selectPlanets.value == 'geonosis') {
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
  containerPlanets.setAttribute('class', 'visible');
  containerFilms.setAttribute('class', 'invisible');
  containerSpecies.setAttribute('class', 'invisible');
  containerVehicles.setAttribute('class', 'invisible');
  containerStarships.setAttribute('class', 'invisible');
  request.onload = star;
  request.onerror = starError;
  request.open('GET', 'https://swapi.co/api/planets');
  request.send();

  selectPlanets.addEventListener('change', () => {star(selectPlanets)});
};
