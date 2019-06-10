'use strict'

const store = require('../store')
const showEventsTemplate = require('../templates/event-listing.handlebars')
const newEventTemplate = require('../templates/new-event.handlebars')
const updateEventTemplate = require('../templates/update-event.handlebars')
const viewEventTemplate = require('../templates/view-event.handlebars')

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

const onPatchEventFailure = () => {
  $('#update-message').text('There was a problem editing your event. Please try again!')
  setTimeout(() => $('#update-message').text(''), 5000)
}

const onClickViewBtnFailure = () => {
  $('#body-message').text('There was a problem finding your event. Please try again!')
  setTimeout(() => $('#body-message').text(''), 5000)
}

const onRsvpFailure = () => {
  $('#body-message').text('There was a problem with your RSVP. Please try again!')
  setTimeout(() => $('#body-message').text(''), 5000)
}

const onGetAttendeesFailure = () => {
  $('#body-message').text('There was a problem updating that this user paid. Please try again!')
  setTimeout(() => $('#body-message').text(''), 5000)
}

const onGetEventsSuccess = (responseData) => {
  if (responseData.events.length !== 0) {
    const showEventsHtml = showEventsTemplate({ events: responseData.events })
    $('.content').html(showEventsHtml)
    store.eventsArray = responseData.events
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
  store.eventsArray.push(responseData.event)
}

const onDeleteEventSuccess = (id) => {
  $(`section[data-id*=${id}]`).html('')
}

const onClickUpdateBtn = () => {
  const id = $(event.target).data('id')
  store.updateId = id
  // Get event object based on id (actually a key value pair where the event object is the value)
  let currentEvent = store.eventsArray.filter(function (item) { return item.id === id })
  // Get value (which is the event object) out of unknown key, looks like: "0 : { event object}
  currentEvent = Object.values(currentEvent)[0]
  const updateEventHtml = updateEventTemplate({ event: currentEvent })
  $(`section[data-id*=${id}]`).html(updateEventHtml)
}

const onPatchEventSuccess = (responseData) => {
  $('#message').text('Event changed successfully')
  setTimeout(() => $('#message').text(''), 5000)
  $('.patch-event').hide()
  $('html, body').animate({ scrollTop: 0 }, 'fast')
}

const onClickViewBtnSuccess = (responseData) => {
  const viewEventHtml = viewEventTemplate({ event: responseData.event })
  $('.content').html(viewEventHtml)
  store.event_id = responseData.event.id
}

const onRsvpSuccess = (responseData) => {
  const email = responseData.attendee.user.email
  $('.rsvp-message').text(`${email} RSVPed successfully`)
  setTimeout(() => $('.rsvp-message').text(''), 5000)
}

const onUpdatePaidSuccess = (responseData) => {
  $('.paid-update').text('Hash cash is updated for this user.')
  setTimeout(() => $('.paid-update').text(''), 5000)
  console.log('attendeeupdateresponse', responseData)
}

module.exports = {
  onGetEventsFailure,
  onGetEventsSuccess,
  onAddEventFailure,
  onAddEventSuccess,
  onDeleteEventFailure,
  onDeleteEventSuccess,
  onClickUpdateBtn,
  onPatchEventFailure,
  onPatchEventSuccess,
  onClickViewBtnFailure,
  onClickViewBtnSuccess,
  onRsvpFailure,
  onRsvpSuccess,
  onGetAttendeesFailure,
  onUpdatePaidSuccess
}
