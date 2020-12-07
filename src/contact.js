function loadContact() {
  const container = document.getElementById('container')
  const contact = document.createElement('address')
  const staff = document.createElement('div')
  const shump = createContact('shump', 'Shump Livingstone', 'CEO')
  const kargath = createContact('kargath', 'Kargath Drakhtul', 'Vice President')
  const caiyra = createContact('caiyra', 'Caiyra Ararieth', 'Accountant')

  contact.setAttribute('id', 'contact')
  contact.innerHTML = "Trollskull Manor<br>Trollskull Alley<br>North Ward<br>Waterdeep<br>DONT WRITE TO US WE CANT READ"

  staff.setAttribute('id', 'staff')
  shump.className = 'contact-details'
  kargath.className = 'contact-details'
  caiyra.className = 'contact-details'
  staff.appendChild(shump)
  staff.appendChild(kargath)
  staff.appendChild(caiyra)

  container.appendChild(contact)
  container.appendChild(staff)
}

function createContact(name, fullname, position) {
  const div = document.createElement('div')
  const img = document.createElement('img')
  const contact = document.createElement('address')

  img.src = `${name}.png`
  contact.innerHTML = `${fullname}<br>${position}`

  div.appendChild(img)
  div.appendChild(contact)

  return div
}

export default loadContact
