const people = () => {
  const containerPeople = document.querySelector('#containerPeople')
  const request = new XMLHttpRequest();
  const selectPeople = document.querySelector('#selectPeople');
  const container = document.querySelector('#container');

  container.setAttribute('class', 'invisible');
  const setCard = (json, i) => {
    let card = document.createElement('div');
    let imagenes = [
      './assets/img/people/luke.jpg',
      './assets/img/people/c3po.jpg',
      './assets/img/people/r2d2.ico',
      './assets/img/people/darth.jpeg',
      './assets/img/people/leia.jpg',
      './assets/img/people/owen.jpg',
      './assets/img/people/beru.jpg',
      './assets/img/people/r5d5.jpg',
      './assets/img/people/biggs.jpg',
      './assets/img/people/obi.jpg'
    ];

    let info = `
      <img src="${imagenes[i]}" alt="" />
      <h2><span class="etiqueta">Nombre:</span> ${json[i].name}</h2>
      <p><span class="etiqueta">Genero:</span> ${json[i].gender}</p>
      <p><span class="etiqueta">Nacimiento:</span> ${json[i].birth_year}</p>
      <p><span class="etiqueta">Altura:</span> ${json[i].height}</p>
      <p><span class="etiqueta">Peso:</span> ${json[i].mass}</p>`;

    containerCardsPeople.appendChild(card);
    card.setAttribute('class', 'card');
    card.innerHTML = info;
  };

  const removeCard = (card, cardLong) => {
    if (containerCardsPlanets.childNodes.length > 0) {
      for (let i = 0; i < cardLong; i++){
        containerCardsPlanets.removeChild(card[i]);
      }
    }
    // containerCardsFilms.removeChild(card);
    // containerCardsSpecies.removeChild(card);
    // containerCardsVehicles.removeChild(card);
    // containerCardsStarships.removeChild(card);
    // if (cardLong < 0) {
    if (containerCardsPeople.childNodes.length > 0) {
      for (let i = 0; i < cardLong; i++) {
        containerCardsPeople.removeChild(card[i]);
      }
    }
    // }
  };

  const star = (selectPeople) => {
    if (request.status == 200) {
      let card = document.querySelectorAll('.card');
      let cardLong = card.length
      let json = JSON.parse(request.responseText).results;
      let long = json.length;
      if (selectPeople.value == 'all' || selectPeople.value == undefined) {
        if (cardLong != 0) {
          removeCard(card, cardLong);
        }
        for (let i = 0; i < long; i++) {
          setCard(json, i);
        }
      } else if (selectPeople.value == 'luke') {
        removeCard(card, cardLong);
        setCard(json, 0)
      } else if (selectPeople.value == 'c3po') {
        removeCard(card, cardLong);
        setCard(json, 1)
      } else if (selectPeople.value == 'r2d2') {
        removeCard(card, cardLong);
        setCard(json, 2)
      } else if (selectPeople.value == 'darth') {
        removeCard(card, cardLong);
        setCard(json, 3)
      } else if (selectPeople.value == 'leia') {
        removeCard(card, cardLong);
        setCard(json, 4)
      } else if (selectPeople.value == 'owen') {
        removeCard(card, cardLong);
        setCard(json, 5)
      } else if (selectPeople.value == 'beru') {
        removeCard(card, cardLong);
        setCard(json, 6)
      } else if (selectPeople.value == 'r5d5') {
        removeCard(card, cardLong);
        setCard(json, 7)
      } else if (selectPeople.value == 'biggs') {
        removeCard(card, cardLong);
        setCard(json, 8)
      } else if (selectPeople.value == 'obi') {
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

  containerPeople.setAttribute('class', 'visible');
  containerPlanets.setAttribute('class', 'invisible');
  request.onload = star;
  request.onerror = starError;
  request.open('GET', 'https://swapi.co/api/people');
  request.send();

  selectPeople.addEventListener('change', () => {star(selectPeople)});
};
