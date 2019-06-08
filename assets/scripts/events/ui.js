'use strict'

const store = require('../store')
const showEventsTemplate = require('../templates/event-listing.handlebars')
const newEventTemplate = require('../templates/new-event.handlebars')

const onGetEventsFailure = () => {
  $('#body-message').text('There was a problem retrieving your data. Please try again!')
  setTimeout(() => $('#body-message').text(''), 5000)
}

const onAddEventFailure = () => {
  $('#add-message').text('There was a problem adding your event. Please try again!')
  setTimeout(() => $('#add-message').text(''), 5000)
}

const onDeleteEventFailure = () => {
  $('#body-message').text('There was a problem deleting your event. Please try again!')
  setTimeout(() => $('#body-message').text(''), 5000)
}

const onGetEventsSuccess = (responseData) => {
  if (responseData.events.length !== 0) {
    const showEventsHtml = showEventsTemplate({ events: responseData.events })
    $('.content').html(showEventsHtml)
  } else {
    $('#body-message').text("There are currently no events. Why don't you add one?")
    setTimeout(() => $('#body-message').text(''), 5000)
  }
}

const onAddEventSuccess = (responseData) => {
  $('#add-message').text('Event added successfully')
  setTimeout(() => $('#add-message').text(''), 5000)
  $('form').trigger('reset')
  const newEventHtml = newEventTemplate({ event: responseData.event })
  $('.content').append(newEventHtml)
}

const onDeleteEventSuccess = (id) => {
  $(`section[data-id*=${id}]`).html('')
}

module.exports = {
  onGetEventsFailure,
  onGetEventsSuccess,
  onAddEventFailure,
  onAddEventSuccess,
  onDeleteEventFailure,
  onDeleteEventSuccess
}
