import loadMenu from './menu'
import loadHome from './home'
import loadServices from './services'
import loadContact from './contact'

loadMenu()
loadHome()

const home = document.getElementById('btn-home')
const services = document.getElementById('btn-services')
const contact = document.getElementById('btn-contact')

home.addEventListener('click', function() {
  document.getElementById('container').innerHTML = ''
  loadHome()
})

services.addEventListener('click', function() {
  document.getElementById('container').innerHTML = ''
  loadServices()
})

contact.addEventListener('click', function() {
  document.getElementById('container').innerHTML = ''
  loadContact()
})
