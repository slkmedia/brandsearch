var basicResults = require('./json/basic.json')

var template = []

for (var i = 0; i < basicResults.length; i++) {
  const item = {
    name: basicResults[i][0],
    tagline: basicResults[i][1],
    color: ''
  }

  for (var c = 0; c < 5; c++) {
    if (basicResults[i][2][c] !== 'null') {
      item.color += '<div class="results__colors__item" style="background-color: ' + basicResults[i][2][c] + '"></div>'
    }
  }

  var markup = `
        <div class="results__item">
        <div class="results__item__plus">+</div>
        <div class="results__item__desc">
            <div class="results__item__desc__title">
              ${item.name}
            </div>
            <div class="results__item__desc__text">
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
