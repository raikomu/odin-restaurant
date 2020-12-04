function loadServices() {
  const content = document.getElementById('content')
  const para = document.createElement('p')
  const servicesWrap = document.createElement('ul')
  const servicesHeader = document.createElement('li')

  para.textContent = 'Our services will provide assistance for every step in the deathcycle of the deceased from getting it off the street to reanimating for extending its usefulness in the living world!'

  const services = {
    'Clearing a body from street': '5sp',
    'Storing a body': '2sp/day',
    'Bury a body': '5sp',
    'Animate a body': '1gp/day'
  }

  content.appendChild(para)
}

export default loadServices
