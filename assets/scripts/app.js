'use strict'

const authEvents = require('./auth/events')
const eventEvents = require('./events/events')
const uiEvents = require('./events/ui')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')


// HIDE ALL EDIT/DELETE BUTTONS WHEN ONE IS PRESSED, OTHERWISE STORE.ID WILL BE WRONG.


$(() => {
  document.addEventListener('window.onload', $('#change-pw').hide())
  document.addEventListener('window.onload', $('#reset-game-div').hide())
  document.addEventListener('window.onload', $('#sign-out').hide())
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-pw').on('submit', authEvents.onChangePassword)
  $('.get-events').on('click', eventEvents.onGetEvents)
  $('.content').on('click', '.get-events', eventEvents.onGetEvents)
  $('#add-event').on('submit', eventEvents.onAddEvent)
  $('.content').on('click', '.delete-event', eventEvents.onDeleteEvent)
  $('.content').on('click', '.update-event', uiEvents.onClickUpdateBtn)
  $('.content').on('submit', '.patch-event', eventEvents.onPatchEvent)
  $('.content').on('click', '.view-event', eventEvents.onClickViewBtn)
})
