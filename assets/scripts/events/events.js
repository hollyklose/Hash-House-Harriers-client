'use strict'

const ui = require('./ui')
const api = require('./api.js')
const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields')

const onGetEvents = () => {
  // if user logged in
  if (store.user) {
    api.getEvents()
      .then(ui.onGetEventsSuccess)
      .catch(ui.onGetEventsFailure)
  } else {
    $('#body-message').text('Please log in to see events!')
    setTimeout(() => $('#body-message').text(''), 5000)
  }
}

const onAddEvent = () => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  formData.event.user_id = store.user.id
  api.addEvent(formData)
    .then(ui.onAddEventSuccess)
    .catch(ui.onAddEventFailure)
}

module.exports = {
  onGetEvents,
  onAddEvent
}
