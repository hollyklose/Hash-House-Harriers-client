'use strict'

// REFACTOR ME PLEASE!!!

const store = require('../store')

const onSignUpSuccess = responseData => {
  $('#message').text('Signed up successfully!')
  setTimeout(() => $('#message').text(''), 5000)
  $('form').trigger('reset')
  $('#sign-up').hide()
}

const onSignUpFailure = responseData => {
  $('#message').text('Sign up failed')
  setTimeout(() => $('#message').text(''), 5000)
  $('form').trigger('reset')
}

const onSignInSuccess = (responseData) => {
  $('#message').text('Signed in successfully!')
  setTimeout(() => $('#message').text(''), 5000)
  store.user = responseData.user
  $('form').trigger('reset')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-pw').show()
  $('#sign-out').show()
  $('#add-event').show()
  $('#content').show()
  $('#add-link').show()
  $('.get-events').show()
  $('#starter-image').hide()
}

const onSignInFailure = () => {
  $('#message').text('Sign in failed')
  setTimeout(() => $('#message').text(''), 5000)
  $('form').trigger('reset')
}

const onSignOutSuccess = () => {
  $('#message').text('Signed out successfully!')
  setTimeout(() => $('#message').text(''), 5000)
  $('form').trigger('reset')
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-pw').hide()
  $('#sign-out').hide()
  $('#add-event').hide()
  $('#content').hide()
  $('#add-link').hide()
  $('.get-events').hide()
  $('#starter-image').show()
}

const onSignOutFailure = () => {
  $('#message').text('Sign out failed')
  setTimeout(() => $('#message').text(''), 5000)
  $('form').trigger('reset')
}

const onChangePasswordSuccess = () => {
  $('#message').text('Changed password successfully!')
  setTimeout(() => $('#message').text(''), 5000)
  $('form').trigger('reset')
}

const onChangePasswordFailure = () => {
  $('#message').text('Change password failed')
  setTimeout(() => $('#message').text(''), 5000)
  $('form').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
