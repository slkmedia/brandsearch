let shown = false
document.getElementsByClassName('header__info')[0].onclick = function () {
  if (shown === false) {
    document.getElementsByClassName('info-module')[0].style.display = 'flex'
    shown = true
  } else {
    document.getElementsByClassName('info-module')[0].style.display = 'none'
    shown = false
  }
}
