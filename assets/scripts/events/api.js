'use strict'

const config = require('../config')
const store = require('../store')

const getEvents = () => {
  return $.ajax({
    url: config.apiUrl + '/events',
    method: 'GET'
  })
}

const addEvent = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/events',
    method: 'POST',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getEvents,
  addEvent
}
