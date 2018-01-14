const species = () => {
  const containerSpecies = document.querySelector('#containerSpecies')
  const request = new XMLHttpRequest();
  const selectSpecies = document.querySelector('#selectSpecies');
  const container = document.querySelector('#container');

  container.setAttribute('class', 'invisible');
  const setCard = (json, i) => {
    let card = document.createElement('div');
    let imagenes = [
      './assets/img/species/hutt.jpg',
      './assets/img/species/yoda.jpg',
      './assets/img/species/trandoshan.jpg',
      './assets/img/species/mon.jpg',
      './assets/img/species/ewok.jpg',
      './assets/img/species/sullustan.jpg',
      './assets/img/species/neimodian.jpg',
      './assets/img/species/gungan.jpg',
      './assets/img/species/toydarian.jpg',
      './assets/img/species/dug.jpg'
    ];

    let info = `
      <img src="${imagenes[i]}" alt="" />
      <h2><span class="etiqueta">Nombre:</span> ${json[i].name}</h2>
      <p><span class="etiqueta">Clasificación:</span> ${json[i].classification}</p>
      <p><span class="etiqueta">Designación:</span> ${json[i].designation}</p>
      <p><span class="etiqueta">Lenguaje:</span> ${json[i].language}</p>
      <p><span class="etiqueta">Planeta:</span> ${json[i].homeworld}</p>`;

    containerCardsSpecies.appendChild(card);
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
    if (containerCardsSpecies.childNodes.length > 0) {
      for (let i = 0; i < cardLong; i++) {
        containerCardsSpecies.removeChild(card[i]);
      }
    }
  };

  const star = (selectSpecies) => {
    if (request.status == 200) {
      let card = document.querySelectorAll('.card');
      let cardLong = card.length
      let json = JSON.parse(request.responseText).results;
      let long = json.length;
      if (selectSpecies.value == 'all' || selectSpecies.value == undefined) {
        if (cardLong != 0) {
          removeCard(card, cardLong);
        }
        for (let i = 0; i < long; i++) {
          setCard(json, i);
        }
      } else if (selectSpecies.value == 'hutt') {
        removeCard(card, cardLong);
        setCard(json, 0)
      } else if (selectSpecies.value == 'yoda') {
        removeCard(card, cardLong);
        setCard(json, 1)
      } else if (selectSpecies.value == 'trandoshan') {
        removeCard(card, cardLong);
        setCard(json, 2)
      } else if (selectSpecies.value == 'mon') {
        removeCard(card, cardLong);
        setCard(json, 3)
      } else if (selectSpecies.value == 'ewok') {
        removeCard(card, cardLong);
        setCard(json, 4)
      } else if (selectSpecies.value == 'sullustan') {
        removeCard(card, cardLong);
        setCard(json, 5)
      } else if (selectSpecies.value == 'neimodian') {
        removeCard(card, cardLong);
        setCard(json, 6)
      } else if (selectSpecies.value == 'gungan') {
        removeCard(card, cardLong);
        setCard(json, 7)
      } else if (selectSpecies.value == 'toydarian') {
        removeCard(card, cardLong);
        setCard(json, 8)
      } else if (selectSpecies.value == 'dug') {
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
  containerSpecies.setAttribute('class', 'visible');
  containerVehicles.setAttribute('class', 'invisible');
  containerStarships.setAttribute('class', 'invisible');
  request.onload = star;
  request.onerror = starError;
  request.open('GET', 'https://swapi.co/api/species');
  request.send();

  selectSpecies.addEventListener('change', () => {star(selectSpecies)});
};
