function loadHome() {
  const content = document.getElementById('content')
  const homeImage = document.createElement('img')
  const copy = document.createElement('section')
  const copyText = document.createElement('p')

  homeImage.src = 'alley.jpg'
  homeImage.setAttribute('id', 'alley')

  copy.setAttribute('id', 'copy')

  copyText.innerHTML = 'We take care of all your dead, from drunken tavern accidents to old age. Our top of the line, Chill Touch powered freezers will keep your remains in top-notch condition! We accommodate all sizes, from gnomes to ogres.'

  copy.appendChild(copyText)
  content.appendChild(copy)
  content.appendChild(homeImage)
}

export default loadHome
