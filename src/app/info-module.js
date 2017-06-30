document.getElementsByClassName('header__info')[0].onclick = function () {
  document.getElementsByClassName('info-module')[0].style.display = 'flex'
}

document.getElementsByClassName('info-module__exit-icon')[0].onclick = function () {
  document.getElementsByClassName('info-module')[0].style.display = 'none'
}
