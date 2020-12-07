function loadServices() {
  const container = document.getElementById('container')
  const para = document.createElement('p')
  const servicesTable = document.createElement('table')
  const servicesHeader = document.createElement('thead')
  const servicesBody = document.createElement('tbody')

  para.textContent = 'Our services will provide assistance for every step in the deathcycle of the deceased from getting the body off the street to reanimating it for extending its usefulness in the living world!'


  const services = [
    ['Clearing a body from street', '5sp'],
    ['Storing a body', '2sp/day'],
    ['Burying a body', '5sp'],
    ['Animating a body', '1gp/day']
  ]

  createTableHeader(servicesHeader, ['SERVICE', 'PRICE'])

  for (let i = 0; i < services.length; i++) {
    addTableRow(servicesBody, services[i])
  }

  servicesTable.setAttribute('id', 'services')
  servicesTable.appendChild(servicesHeader)
  servicesTable.appendChild(servicesBody)
  container.appendChild(para)
  container.appendChild(servicesTable)
}

function createTableHeader(header, values) {
  const row = document.createElement('tr')
  for (let i = 0; i < values.length; i++) {
    const th = document.createElement('th')
    let value = values[i]
    th.innerHTML = value
    row.appendChild(th)
    header.appendChild(row)
  }
}

function addTableRow(body, values) {
  const row = document.createElement('tr')
  for (let i = 0; i < values.length; i++) {
    const td = document.createElement('td')
    let value = values[i]
    td.innerHTML = value
    row.appendChild(td)
    body.appendChild(row)
  }
}

export default loadServices
