var basicResults = require('./json/basic.json')

var template = []

for (var i = 0; i < basicResults.length; i++) {
  const item = {
    id: basicResults[i][0],
    name: basicResults[i][1],
    tagline: basicResults[i][2],
    color: ''
  }

  for (var c = 0; c < 5; c++) {
    if (basicResults[i][3][c] !== 'null') {
      item.color += '<div class="results__colors__item" style="background-color: ' + basicResults[i][3][c] + '"></div>'
    }
  }

  var markup = `
        <div class="results__item">
        <div class="results__item__plus" data-id="${item.id}">+</div>
        <div class="results__item__desc">
            <div class="results__item__desc__title">
              ${item.name}
            </div>
            <div class="results__item__desc__text">
              ${item.tagline}
            </div>
        </div>

        <div class="results__item__popup">
          test
        </div>

        <div class="results__colors">
          ${item.color}
        </div>
      </div>`

  template.push(markup)
}

for (var j = 0; j < template.length; j++) {
  document.getElementById('js-results').innerHTML += template[j]
}

function openModal (id) {
  id = (parseInt(id) - 1)

  let item = {
    id: basicResults[id][0],
    name: basicResults[id][1],
    tagline: basicResults[id][2],
    color: ''
  }

  for (var c = 0; c < 5; c++) {
    if (basicResults[id][3][c] !== 'null') {
      item.color += `
      <div class="results-modal__colors">
        <div class="results-modal__colors-code">${basicResults[id][3][c]}</div>
        <div class="results-modal__colors-swatch" style="background-color: ${basicResults[id][3][c]}"></div>
      </div>
      `
    }
  }

  let resultsModal = `
    <div class="results-modal">
      <div class="results-modal__close-btn">
        <img src="img/x-circle.svg">
      </div>
      <div class="results-modal__name">
        ${item.name}
      </div>
      <div class="results-modal__tagline">
        ${item.tagline}
      </div>
      <div class="results-modal__colors-container">
        ${item.color}
      </div>
    </div>
  `
  document.getElementById('results-modal-js').innerHTML = resultsModal

  document.getElementsByClassName('results-modal__close-btn')[0].onclick = function () {
    document.getElementById('results-modal-js').innerHTML = ''
  }
}

document.addEventListener('DOMContentLoaded', function (event) {
  let resultsItems = document.querySelectorAll('.results__item > .results__item__plus')
  resultsItems.forEach(function (item) {
    item.onclick = function () {
      openModal(this.dataset.id)
    }
  }, this)
})
