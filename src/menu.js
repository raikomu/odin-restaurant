function loadMenu() {
  const content = document.getElementById("content")
  const logo = document.createElement('img')
  const nav = document.createElement('nav')
  const home = document.createElement('a')
  const services= document.createElement('a')
  const contact = document.createElement('a')

  logo.src = 'logo.png'
  logo.setAttribute('id', 'logo')

  home.innerHTML = 'Home'
  services.innerHTML = 'Services'
  contact.innerHTML = 'Contact'

  nav.setAttribute('id', 'main-nav')
  nav.appendChild(home)
  nav.appendChild(services)
  nav.appendChild(contact)

  content.appendChild(logo)
  content.appendChild(nav)
}

export default loadMenu
