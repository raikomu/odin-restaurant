function loadMenu() {
  const content = document.getElementById('content')
  const header = document.createElement('header')
  const container = document.createElement('div')
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
  home.setAttribute('id', 'btn-home')
  services.setAttribute('id', 'btn-services')
  contact.setAttribute('id', 'btn-contact')

  nav.setAttribute('id', 'main-nav')
  nav.appendChild(home)
  nav.appendChild(services)
  nav.appendChild(contact)

  header.append(logo)
  header.append(nav)

  container.setAttribute('id', 'container')

  content.appendChild(header)
  content.appendChild(container)
}

export default loadMenu
