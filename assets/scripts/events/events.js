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
    .then(onGetEvents)
    .then(ui.onAddEventSuccess)
    .catch(ui.onAddEventFailure)
}

const onDeleteEvent = () => {
  const id = $(event.target).data('id')
  api.deleteEvent(id)
    .then(onGetEvents)
    .then(responseData => {
      ui.onDeleteEventSuccess(id)
    })
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

const onClickViewBtn = () => {
  const id = $(event.target).data('id')
  api.showEvent(id)
    .then((responseData) => {
      ui.onClickViewBtnSuccess(responseData)
      store.rsvpedUsers = responseData.event.users
      const rsvpedUsers = Object.values(store.rsvpedUsers)
      let isAlreadyRsvped = false
      Object.values(rsvpedUsers).forEach(value => {
        if (value['id'] === store.user.id) {
          isAlreadyRsvped = true
        }
      })
      if (isAlreadyRsvped) {
        $('.rsvp').hide()
        $('.un-rsvp').show()
      }
    })
    .catch(ui.onClickViewBtnFailure)
}

const onRsvp = () => {
  const eventId = $(event.target).data('id')
  api.rsvp(eventId)
    .then(ui.onRsvpSuccess)
    .catch(ui.onRsvpFailure)
}

const onUpdatePaid = () => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const userId = $(event.target).data('id')
  api.getAttendees()
    .then((responseData) => {
      const currentAttendeeObj = responseData.attendees.filter(function (obj) {
        return (obj.user.id === userId && obj.event.id === store.event_id)
      })
      const currentAttendee = Object.values(currentAttendeeObj)[0]
      const currentAttendeeId = Number(currentAttendee['id'])
      formData.attendeeId = currentAttendeeId
      api.updatePaid(formData)
        .then(ui.onUpdatePaidSuccess)
        .catch(ui.onGetAttendeesFailure)
    })
    .catch(ui.onGetAttendeesFailure)
}

// if date hasn't already passed, then user can un-rsvp
const onUnRsvp = () => {
  const userId = store.user.id
  if (new Date() < new Date(($(event.target).data('date')))) {
    api.getAttendees()
      .then((responseData) => {
        const currentAttendeeObj = responseData.attendees.filter(function (obj) {
          return (obj.user.id === userId && obj.event.id === store.event_id)
        })
        const currentAttendee = Object.values(currentAttendeeObj)[0]
        const currentAttendeeId = Number(currentAttendee['id'])
        api.unRsvp(currentAttendeeId)
          .then(ui.onUnRsvpSuccess)
          .catch(ui.onUnRsvpFailure)
      })
      .catch(ui.onGetEventsFailure)
  } else {
    $('.rsvp-message').text('The event is already over.')
    setTimeout(() => $('.rsvp-message').text(''), 5000)
  }
}

module.exports = {
  onGetEvents,
  onAddEvent,
  onDeleteEvent,
  onPatchEvent,
  onClickViewBtn,
  onRsvp,
  onUpdatePaid,
  onUnRsvp
}
