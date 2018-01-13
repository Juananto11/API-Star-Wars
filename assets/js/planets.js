'use strict';var planets=function planets(){var containerPlanets=document.querySelector('#containerPlanets');var request=new XMLHttpRequest;var selectPlanets=document.querySelector('#selectPlanets');var container=document.querySelector('#container');container.setAttribute('class','invisible');var setCard=function setCard(json,i){var card=document.createElement('div');var imagenes=['./assets/img/planets/alderaan.jpg','./assets/img/planets/yavin.jpg','./assets/img/planets/hoth.jpg','./assets/img/planets/dagobah.jpg','./assets/img/planets/bespin.jpg','./assets/img/planets/endor.jpg','./assets/img/planets/naboo.jpg','./assets/img/planets/coruscant.jpg','./assets/img/planets/kamino.jpg','./assets/img/planets/geonosis.jpg'];var info='\n      <img src="'+imagenes[i]+'" alt="" />\n      <h2><span class="etiqueta">Nombre:</span> '+json[i].name+'</h2>\n      <p><span class="etiqueta">Genero:</span> '+json[i].gender+'</p>\n      <p><span class="etiqueta">Nacimiento:</span> '+json[i].birth_year+'</p>\n      <p><span class="etiqueta">Altura:</span> '+json[i].height+'</p>\n      <p><span class="etiqueta">Peso:</span> '+json[i].mass+'</p>';containerCardsPlanets.appendChild(card);card.setAttribute('class','card');card.innerHTML=info};var removeCard=function removeCard(card,cardLong){if(containerCardsPeople.childNodes.length>0){for(var i=0;i<cardLong;i++){containerCardsPeople.removeChild(card[i])}}// containerCardsFilms.removeChild(card);
// containerCardsSpecies.removeChild(card);
// containerCardsVehicles.removeChild(card);
// containerCardsStarships.removeChild(card);
// if (cardLong < 0) {
if(containerCardsPlanets.childNodes.length>0){for(var _i=0;_i<cardLong;_i++){containerCardsPlanets.removeChild(card[_i])}}// }
};var star=function star(selectPlanets){if(request.status==200){var card=document.querySelectorAll('.card');var cardLong=card.length;var json=JSON.parse(request.responseText).results;var long=json.length;if(selectPlanets.value=='all'||selectPlanets.value==undefined){if(cardLong!=0){removeCard(card,cardLong)}for(var i=0;i<long;i++){setCard(json,i)}}else if(selectPlanets.value=='alderaan'){removeCard(card,cardLong);setCard(json,0)}else if(selectPlanets.value=='yavin'){removeCard(card,cardLong);setCard(json,1)}else if(selectPlanets.value=='hoth'){removeCard(card,cardLong);setCard(json,2)}else if(selectPlanets.value=='dagobah'){removeCard(card,cardLong);setCard(json,3)}else if(selectPlanets.value=='bespin'){removeCard(card,cardLong);setCard(json,4)}else if(selectPlanets.value=='endor'){removeCard(card,cardLong);setCard(json,5)}else if(selectPlanets.value=='naboo'){removeCard(card,cardLong);setCard(json,6)}else if(selectPlanets.value=='coruscant'){removeCard(card,cardLong);setCard(json,7)}else if(selectPlanets.value=='kamino'){removeCard(card,cardLong);setCard(json,8)}else if(selectPlanets.value=='geonosis'){removeCard(card,cardLong);setCard(json,9)}}else{console.log('no')}};var starError=function starError(error){console.log('No se puede conectar al API')};containerPeople.setAttribute('class','invisible');containerPlanets.setAttribute('class','visible');request.onload=star;request.onerror=starError;request.open('GET','https://swapi.co/api/planets');request.send();selectPlanets.addEventListener('change',function(){star(selectPlanets)})};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYW5ldHMuanMiXSwibmFtZXMiOlsicGxhbmV0cyIsImNvbnRhaW5lclBsYW5ldHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJzZWxlY3RQbGFuZXRzIiwiY29udGFpbmVyIiwic2V0QXR0cmlidXRlIiwic2V0Q2FyZCIsImpzb24iLCJpIiwiY2FyZCIsImNyZWF0ZUVsZW1lbnQiLCJpbWFnZW5lcyIsImluZm8iLCJuYW1lIiwiZ2VuZGVyIiwiYmlydGhfeWVhciIsImhlaWdodCIsIm1hc3MiLCJjb250YWluZXJDYXJkc1BsYW5ldHMiLCJhcHBlbmRDaGlsZCIsImlubmVySFRNTCIsInJlbW92ZUNhcmQiLCJjYXJkTG9uZyIsImNvbnRhaW5lckNhcmRzUGVvcGxlIiwiY2hpbGROb2RlcyIsImxlbmd0aCIsInJlbW92ZUNoaWxkIiwic3RhciIsInN0YXR1cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJyZXN1bHRzIiwibG9uZyIsInZhbHVlIiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsInN0YXJFcnJvciIsImVycm9yIiwiY29udGFpbmVyUGVvcGxlIiwib25sb2FkIiwib25lcnJvciIsIm9wZW4iLCJzZW5kIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6ImFBQUEsR0FBTUEsU0FBVSxRQUFWQSxRQUFVLEVBQU0sQ0FDcEIsR0FBTUMsa0JBQW1CQyxTQUFTQyxhQUFULENBQXVCLG1CQUF2QixDQUF6QixDQUNBLEdBQU1DLFNBQVUsR0FBSUMsZUFBcEIsQ0FDQSxHQUFNQyxlQUFnQkosU0FBU0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBdEIsQ0FDQSxHQUFNSSxXQUFZTCxTQUFTQyxhQUFULENBQXVCLFlBQXZCLENBQWxCLENBRUFJLFVBQVVDLFlBQVYsQ0FBdUIsT0FBdkIsQ0FBZ0MsV0FBaEMsRUFDQSxHQUFNQyxTQUFVLFFBQVZB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QVksNkJBQVosQ0FDRCxDQUZELENBSUFHLGdCQUFnQnBDLFlBQWhCLENBQTZCLE9BQTdCLENBQXNDLFdBQXRDLEVBQ0FQLGlCQUFpQk8sWUFBakIsQ0FBOEIsT0FBOUIsQ0FBdUMsU0FBdkMsRUFDQUosUUFBUXlDLE1BQVIsQ0FBaUJmLElBQWpCLENBQ0ExQixRQUFRMEMsT0FBUixDQUFrQkosU0FBbEIsQ0FDQXRDLFFBQVEyQyxJQUFSLENBQWEsS0FBYixDQUFvQiw4QkFBcEIsRUFDQTNDLFFBQVE0QyxJQUFSLEdBRUExQyxjQUFjMkMsZ0JBQWQsQ0FBK0IsUUFBL0IsQ0FBeUMsVUFBTSxDQUFDbkIsS0FBS3hCLGFBQUwsQ0FBb0IsQ0FBcEUsQ0FDRCxDQW5IRCIsImZpbGUiOiJwbGFuZXRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGxhbmV0cyA9ICgpID0+IHtcclxuICBjb25zdCBjb250YWluZXJQbGFuZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lclBsYW5ldHMnKVxyXG4gIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICBjb25zdCBzZWxlY3RQbGFuZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdFBsYW5ldHMnKTtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XHJcblxyXG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ludmlzaWJsZScpO1xyXG4gIGNvbnN0IHNldENhcmQgPSAoanNvbiwgaSkgPT4ge1xyXG4gICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBpbWFnZW5lcyA9IFtcclxuICAgICAgJy4vYXNzZXRzL2ltZy9wbGFuZXRzL2FsZGVyYWFuLmpwZycsXHJcbiAgICAgICcuL2Fzc2V0cy9pbWcvcGxhbmV0cy95YXZpbi5qcGcnLFxyXG4gICAgICAnLi9hc3NldHMvaW1nL3BsYW5ldHMvaG90aC5qcGcnLFxyXG4gICAgICAnLi9hc3NldHMvaW1nL3BsYW5ldHMvZGFnb2JhaC5qcGcnLFxyXG4gICAgICAnLi9hc3NldHMvaW1nL3BsYW5ldHMvYmVzcGluLmpwZycsXHJcbiAgICAgICcuL2Fzc2V0cy9pbWcvcGxhbmV0cy9lbmRvci5qcGcnLFxyXG4gICAgICAnLi9hc3NldHMvaW1nL3BsYW5ldHMvbmFib28uanBnJyxcclxuICAgICAgJy4vYXNzZXRzL2ltZy9wbGFuZXRzL2NvcnVzY2FudC5qcGcnLFxyXG4gICAgICAnLi9hc3NldHMvaW1nL3BsYW5ldHMva2FtaW5vLmpwZycsXHJcbiAgICAgICcuL2Fzc2V0cy9pbWcvcGxhbmV0cy9nZW9ub3Npcy5qcGcnXHJcbiAgICBdO1xyXG5cclxuICAgIGxldCBpbmZvID0gYFxyXG4gICAgICA8aW1nIHNyYz1cIiR7aW1hZ2VuZXNbaV19XCIgYWx0PVwiXCIgLz5cclxuICAgICAgPGgyPjxzcGFuIGNsYXNzPVwiZXRpcXVldGFcIj5Ob21icmU6PC9zcGFuPiAke2pzb25baV0ubmFtZX08L2gyPlxyXG4gICAgICA8cD48c3BhbiBjbGFzcz1cImV0aXF1ZXRhXCI+R2VuZXJvOjwvc3Bhbj4gJHtqc29uW2ldLmdlbmRlcn08L3A+XHJcbiAgICAgIDxwPjxzcGFuIGNsYXNzPVwiZXRpcXVldGFcIj5OYWNpbWllbnRvOjwvc3Bhbj4gJHtqc29uW2ldLmJpcnRoX3llYXJ9PC9wPlxyXG4gICAgICA8cD48c3BhbiBjbGFzcz1cImV0aXF1ZXRhXCI+QWx0dXJhOjwvc3Bhbj4gJHtqc29uW2ldLmhlaWdodH08L3A+XHJcbiAgICAgIDxwPjxzcGFuIGNsYXNzPVwiZXRpcXVldGFcIj5QZXNvOjwvc3Bhbj4gJHtqc29uW2ldLm1hc3N9PC9wPmA7XHJcblxyXG4gICAgY29udGFpbmVyQ2FyZHNQbGFuZXRzLmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQnKTtcclxuICAgIGNhcmQuaW5uZXJIVE1MID0gaW5mbztcclxuICB9O1xyXG5cclxuICBjb25zdCByZW1vdmVDYXJkID0gKGNhcmQsIGNhcmRMb25nKSA9PiB7XHJcbiAgICBpZiAoY29udGFpbmVyQ2FyZHNQZW9wbGUuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZExvbmc7IGkrKyl7XHJcbiAgICAgICAgY29udGFpbmVyQ2FyZHNQZW9wbGUucmVtb3ZlQ2hpbGQoY2FyZFtpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGNvbnRhaW5lckNhcmRzRmlsbXMucmVtb3ZlQ2hpbGQoY2FyZCk7XHJcbiAgICAvLyBjb250YWluZXJDYXJkc1NwZWNpZXMucmVtb3ZlQ2hpbGQoY2FyZCk7XHJcbiAgICAvLyBjb250YWluZXJDYXJkc1ZlaGljbGVzLnJlbW92ZUNoaWxkKGNhcmQpO1xyXG4gICAgLy8gY29udGFpbmVyQ2FyZHNTdGFyc2hpcHMucmVtb3ZlQ2hpbGQoY2FyZCk7XHJcbiAgICAvLyBpZiAoY2FyZExvbmcgPCAwKSB7XHJcbiAgICBpZiAoY29udGFpbmVyQ2FyZHNQbGFuZXRzLmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRMb25nOyBpKyspIHtcclxuICAgICAgICBjb250YWluZXJDYXJkc1BsYW5ldHMucmVtb3ZlQ2hpbGQoY2FyZFtpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBzdGFyID0gKHNlbGVjdFBsYW5ldHMpID0+IHtcclxuICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpO1xyXG4gICAgICBsZXQgY2FyZExvbmcgPSBjYXJkLmxlbmd0aFxyXG4gICAgICBsZXQganNvbiA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpLnJlc3VsdHM7XHJcbiAgICAgIGxldCBsb25nID0ganNvbi5sZW5ndGg7XHJcbiAgICAgIGlmIChzZWxlY3RQbGFuZXRzLnZhbHVlID09ICdhbGwnIHx8IHNlbGVjdFBsYW5ldHMudmFsdWUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKGNhcmRMb25nICE9IDApIHtcclxuICAgICAgICAgIHJlbW92ZUNhcmQoY2FyZCwgY2FyZExvbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvbmc7IGkrKykge1xyXG4gICAgICAgICAgc2V0Q2FyZChqc29uLCBpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoc2VsZWN0UGxhbmV0cy52YWx1ZSA9PSAnYWxkZXJhYW4nKSB7XHJcbiAgICAgICAgcmVtb3ZlQ2FyZChjYXJkLCBjYXJkTG9uZyk7XHJcbiAgICAgICAgc2V0Q2FyZChqc29uLCAwKVxyXG4gICAgICB9IGVsc2UgaWYgKHNlbGVjdFBsYW5ldHMudmFsdWUgPT0gJ3lhdmluJykge1xyXG4gICAgICAgIHJlbW92ZUNhcmQoY2FyZCwgY2FyZExvbmcpO1xyXG4gICAgICAgIHNldENhcmQoanNvbiwgMSlcclxuICAgICAgfSBlbHNlIGlmIChzZWxlY3RQbGFuZXRzLnZhbHVlID09ICdob3RoJykge1xyXG4gICAgICAgIHJlbW92ZUNhcmQoY2FyZCwgY2FyZExvbmcpO1xyXG4gICAgICAgIHNldENhcmQoanNvbiwgMilcclxuICAgICAgfSBlbHNlIGlmIChzZWxlY3RQbGFuZXRzLnZhbHVlID09ICdkYWdvYmFoJykge1xyXG4gICAgICAgIHJlbW92ZUNhcmQoY2FyZCwgY2FyZExvbmcpO1xyXG4gICAgICAgIHNldENhcmQoanNvbiwgMylcclxuICAgICAgfSBlbHNlIGlmIChzZWxlY3RQbGFuZXRzLnZhbHVlID09ICdiZXNwaW4nKSB7XHJcbiAgICAgICAgcmVtb3ZlQ2FyZChjYXJkLCBjYXJkTG9uZyk7XHJcbiAgICAgICAgc2V0Q2FyZChqc29uLCA0KVxyXG4gICAgICB9IGVsc2UgaWYgKHNlbGVjdFBsYW5ldHMudmFsdWUgPT0gJ2VuZG9yJykge1xyXG4gICAgICAgIHJlbW92ZUNhcmQoY2FyZCwgY2FyZExvbmcpO1xyXG4gICAgICAgIHNldENhcmQoanNvbiwgNSlcclxuICAgICAgfSBlbHNlIGlmIChzZWxlY3RQbGFuZXRzLnZhbHVlID09ICduYWJvbycpIHtcclxuICAgICAgICByZW1vdmVDYXJkKGNhcmQsIGNhcmRMb25nKTtcclxuICAgICAgICBzZXRDYXJkKGpzb24sIDYpXHJcbiAgICAgIH0gZWxzZSBpZiAoc2VsZWN0UGxhbmV0cy52YWx1ZSA9PSAnY29ydXNjYW50Jykge1xyXG4gICAgICAgIHJlbW92ZUNhcmQoY2FyZCwgY2FyZExvbmcpO1xyXG4gICAgICAgIHNldENhcmQoanNvbiwgNylcclxuICAgICAgfSBlbHNlIGlmIChzZWxlY3RQbGFuZXRzLnZhbHVlID09ICdrYW1pbm8nKSB7XHJcbiAgICAgICAgcmVtb3ZlQ2FyZChjYXJkLCBjYXJkTG9uZyk7XHJcbiAgICAgICAgc2V0Q2FyZChqc29uLCA4KVxyXG4gICAgICB9IGVsc2UgaWYgKHNlbGVjdFBsYW5ldHMudmFsdWUgPT0gJ2dlb25vc2lzJykge1xyXG4gICAgICAgIHJlbW92ZUNhcmQoY2FyZCwgY2FyZExvbmcpO1xyXG4gICAgICAgIHNldENhcmQoanNvbiwgOSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ25vJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3RhckVycm9yID0gKGVycm9yKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnTm8gc2UgcHVlZGUgY29uZWN0YXIgYWwgQVBJJyk7XHJcbiAgfTtcclxuXHJcbiAgY29udGFpbmVyUGVvcGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW52aXNpYmxlJyk7XHJcbiAgY29udGFpbmVyUGxhbmV0cy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Zpc2libGUnKTtcclxuICByZXF1ZXN0Lm9ubG9hZCA9IHN0YXI7XHJcbiAgcmVxdWVzdC5vbmVycm9yID0gc3RhckVycm9yO1xyXG4gIHJlcXVlc3Qub3BlbignR0VUJywgJ2h0dHBzOi8vc3dhcGkuY28vYXBpL3BsYW5ldHMnKTtcclxuICByZXF1ZXN0LnNlbmQoKTtcclxuXHJcbiAgc2VsZWN0UGxhbmV0cy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7c3RhcihzZWxlY3RQbGFuZXRzKX0pO1xyXG59O1xyXG4iXX0=
