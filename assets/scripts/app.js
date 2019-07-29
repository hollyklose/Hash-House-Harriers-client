'use strict'

const authEvents = require('./auth/events')
const eventEvents = require('./events/events')
const uiEvents = require('./events/ui')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  document.addEventListener('window.onload', $('#change-pw').hide())
  document.addEventListener('window.onload', $('#reset-game-div').hide())
  document.addEventListener('window.onload', $('#sign-out').hide())
  document.addEventListener('window.onload', $('#add-link').hide())
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-pw').on('submit', authEvents.onChangePassword)
  $('.get-events').on('click', eventEvents.onGetEvents)
  $('.content').on('click', '.get-events', eventEvents.onGetEvents)
  $('.content').on('click', '.rsvp', eventEvents.onRsvp)
  $('.auth').on('click', '#show-event-form', uiEvents.onClickAddEvent)
  $('.content').on('submit', '#add-event', eventEvents.onAddEvent)
  $('.content').on('click', '.delete-event', eventEvents.onDeleteEvent)
  $('.content').on('click', '.update-event', uiEvents.onClickUpdateBtn)
  $('.content').on('submit', '.patch-event', eventEvents.onPatchEvent)
  $('.content').on('click', '.view-event', eventEvents.onClickViewBtn)
  $('.content').on('submit', '.update-paid', eventEvents.onUpdatePaid)
  $('.content').on('click', '.un-rsvp', eventEvents.onUnRsvp)
})
