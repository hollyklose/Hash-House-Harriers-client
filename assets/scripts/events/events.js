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
  console.log('userid', formData.event.user_id)
  api.addEvent(formData)
    .then(ui.onAddEventSuccess)
    .catch(ui.onAddEventFailure)
}

const onDeleteEvent = () => {
  const id = $(event.target).data('id')
  api.deleteEvent(id)
    .then(responseData => { ui.onDeleteEventSuccess(id) })
    .catch(ui.onDeleteEventFailure)
}

const onPatchEvent = () => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const id = store.updateId
  formData.event.id = id
  formData.event.user_id = store.user.id
  api.patchEvent(formData)
    .then(onGetEvents)
    .then(ui.onPatchEventSuccess)
    .catch(ui.onPatchEventFailure)
}

module.exports = {
  onGetEvents,
  onAddEvent,
  onDeleteEvent,
  onPatchEvent
}
