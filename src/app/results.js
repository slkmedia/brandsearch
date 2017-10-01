import List from 'list.js'
var basicResults = require('./json/basic.json')

var template = []

var url = window.location.pathname

var slugURL = url.split('/')[1]

if (slugURL) {
  openModal(slugURL)
}

function noScroll (action) {
  if (action === true) {
    document.body.className += ' ' + 'no-scroll'
  } else {
    document.body.className = ''
  }
}

for (var i = 0; i < basicResults.length; i++) {
  const item = {
    id: basicResults[i][0],
    name: basicResults[i][1],
    slug: basicResults[i][2],
    tagline: basicResults[i][3],
    color: ''
  }

  for (var c = 0; c < 5; c++) {
    if (basicResults[i][4][c] !== 'null') {
      item.color += '<div class="results__colors__item" style="background-color: ' + basicResults[i][4][c] + '"> <span class="results__swatch-hidden swatch">' + basicResults[i][3][c] + '</span></div>'
    }
  }

  var markup = `
        <div class="results__item item" data-slug="${item.slug}">
        <div class="results__item__desc">
            <div class="results__item__desc__title name">
              ${item.name}
            </div>
            <div class="results__item__desc__text tagline">
              ${item.tagline}
            </div>
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

function openModal (slug) {
  noScroll(true)

  window.history.pushState(window.location.href, '/', slug)

  for (let i = 0; i < basicResults.length; i++) {
    if (basicResults[i][2] === slug) {
      var id = basicResults[i][0]
    }
  }

  id = (parseInt(id) - 1)

  let item = {
    id: basicResults[id][0],
    name: basicResults[id][1],
    tagline: basicResults[id][3],
    color: ''
  }

  for (var c = 0; c < 5; c++) {
    if (basicResults[id][4][c] !== 'null') {
      item.color += `
      <div class="results-modal__colors">
        <div class="results-modal__colors-swatch" style="background-color: ${basicResults[id][4][c]}"></div>
        <div class="results-modal__colors-code">${basicResults[id][4][c]}</div>
      </div>
      `
    }
  }

  let resultsModal = `
    <div class="results-modal">
      <div class="results-modal__close-btn">
        <img src="img/x-circle.svg">
      </div>
      <div class="results-modal__top-container">
        <div class="results-modal__title">
          <div class="results-modal__name">
            ${item.name}
          </div>
          <div class="results-modal__tagline">
            ${item.tagline}
          </div>
        </div>
        <div class="results-modal__colors-container">
          ${item.color}
        </div>
      </div>
    </div>
  `
  document.getElementById('results-modal-js').innerHTML = resultsModal

  document.getElementsByClassName('results-modal__close-btn')[0].onclick = function () {
    document.getElementById('results-modal-js').innerHTML = ''
    window.history.pushState(window.location.href.split('/')[2], null, '/')
    noScroll(false)
  }
}

document.addEventListener('DOMContentLoaded', function (event) {
  let resultsItems = document.querySelectorAll('.results__item')
  resultsItems.forEach(function (item) {
    item.onclick = function () {
      openModal(this.dataset.slug)
    }
  }, this)
})

document.addEventListener('DOMContentLoaded', function (event) {
  var options = {
    valueNames: [ 'name', 'tagline', 'swatch' ]
  }
  var searchList = new List('search-list', options)
  console.log(searchList, options)
})

window.onpopstate = function (event) {
  document.getElementById('results-modal-js').innerHTML = ''
  window.history.pushState(window.location.href.split('/')[2], null, '/')
  noScroll(false)
}
