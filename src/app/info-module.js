let shown = false
document.getElementsByClassName('header__info')[0].onclick = function () {
  if (shown === false) {
    window.history.pushState(window.location.href, '/', 'about')
    document.getElementsByClassName('info-module')[0].style.display = 'flex'
    shown = true
  } else {
    document.getElementsByClassName('info-module')[0].style.display = 'none'
    window.history.pushState(window.location.href.split('/')[2], null, '/')
    shown = false
  }
}

window.onkeydown = function (e) {
  if (e.keyCode === 27 || e.keyCode === 13) {
    if (shown === false) {
      window.history.pushState(window.location.href, '/', 'about')
      document.getElementsByClassName('info-module')[0].style.display = 'flex'
      shown = true
    } else {
      document.getElementsByClassName('info-module')[0].style.display = 'none'
      window.history.pushState(window.location.href.split('/')[2], null, '/')
      shown = false
    }
  }
}
