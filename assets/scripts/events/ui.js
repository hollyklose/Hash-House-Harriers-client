'use strict'

const store = require('../store')
const showEventsTemplate = require('../templates/event-listing.handlebars')

const onGetEventsFailure = () => {
  $('#body-message').text('There was a problem retrieving your data. Please try again!')
  setTimeout(() => $('#body-message').text(''), 5000)
}

const onAddEventFailure = () => {
  $('#body-message').text('There was a problem adding your event. Please try again!')
  setTimeout(() => $('#body-message').text(''), 5000)
}

const onGetEventsSuccess = (responseData) => {
  const showEventsHtml = showEventsTemplate({ events: responseData.events })
  $('.content').html(showEventsHtml)
}

const onAddEventSuccess = (responseData) => {
  $('#body-message').text('Event added successfully')
  setTimeout(() => $('#body-message').text(''), 5000)
  $('form').trigger('reset')
}

module.exports = {
  onGetEventsFailure,
  onGetEventsSuccess,
  onAddEventFailure,
  onAddEventSuccess
}
