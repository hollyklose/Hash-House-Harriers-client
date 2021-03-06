'use strict'

const store = require('../store')
const showEventsTemplate = require('../templates/event-listing.handlebars')
const updateEventTemplate = require('../templates/update-event.handlebars')
const viewEventTemplate = require('../templates/view-event.handlebars')
const addEventTemplate = require('../templates/add-event.handlebars')

const onGetEventsFailure = () => {
  $('#body-message').text('There was a problem retrieving your data. Please try again!')
  setTimeout(() => $('#body-message').text(''), 7000)
}

const onAddEventFailure = () => {
  $('#add-message').text('There was a problem adding your event. Please try again!')
  setTimeout(() => $('#add-message').text(''), 7000)
}

const onDeleteEventFailure = () => {
  $('#body-message').text('There was a problem deleting your event. Please try again!')
  setTimeout(() => $('#body-message').text(''), 7000)
}

const onPatchEventFailure = () => {
  $('#update-message').text('There was a problem editing your event. Please try again!')
  setTimeout(() => $('#update-message').text(''), 7000)
}

const onClickViewBtnFailure = () => {
  $('#body-message').text('There was a problem finding your event. Please try again!')
  setTimeout(() => $('#body-message').text(''), 7000)
}

const onRsvpFailure = () => {
  $('#body-message').text('There was a problem with your RSVP. Please try again!')
  setTimeout(() => $('#body-message').text(''), 7000)
}

const onGetAttendeesFailure = () => {
  $('#body-message').text('There was a problem updating that this user paid. Please try again!')
  setTimeout(() => $('#body-message').text(''), 7000)
}

const onUnRsvpFailure = () => {
  $('#body-message').text('There was a problem removing your RSVP. Please try again!')
  setTimeout(() => $('#body-message').text(''), 7000)
}

const onGetEventsSuccess = (responseData) => {
  const currentEventsOnly = responseData.events.filter(event => new Date(event.date) > new Date())
  if (currentEventsOnly.length !== 0) {
    const showEventsHtml = showEventsTemplate({ events: currentEventsOnly })
    $('.content').html(showEventsHtml)
    store.eventsArray = responseData.events
    $('#get-message').text('Join one of these awesome events!')
    setTimeout(() => $('#get-message').text(''), 7000)
  } else {
    $('#body-message').text("There are currently no events. Why don't you add one?")
    setTimeout(() => $('#body-message').text(''), 7000)
  }
  $('#past-events').css('opacity', 1)
  $('#current-events').css('opacity', 0.5)
}

const onGetPastEventsSuccess = (responseData) => {
  const pastEventsOnly = responseData.events.filter(event => new Date(event.date) < new Date())
  if (pastEventsOnly.length !== 0) {
    const showEventsHtml = showEventsTemplate({ events: pastEventsOnly })
    $('.content').html(showEventsHtml)
    store.eventsArray = responseData.events
    $('#get-message').text('These fun events already happened!')
    setTimeout(() => $('#get-message').text(''), 7000)
  } else {
    $('#body-message').text("There are currently no past events. Click current events to see what's coming!")
    setTimeout(() => $('#body-message').text(''), 7000)
  }
  $('#past-events').css('opacity', 0.5)
  $('#current-events').css('opacity', 1)
}

const onAddEventSuccess = (responseData) => {
  $('#add-message').text('Event added successfully')
  setTimeout(() => $('#add-message').text(''), 7000)
  $('form').trigger('reset')
}

const onDeleteEventSuccess = (id) => {
  $('.delete-event').hide()
  $('.update-event').hide()
  $('#body-message').html('Your event was successfully deleted! Click "Get events" to delete or edit another of your events.')
  setTimeout(() => $('#body-message').text(''), 7000)
  $('html, body').animate({ scrollTop: 0 }, 'fast')
  $('.content').html('')
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
  $('.delete-event').hide()
  $('.update-event').hide()
  $('#update-message').html('Click "Get events" to delete or edit another of your events. Edit your event below:')
  setTimeout(() => $('#update-message').text(''), 7000)
}

const onPatchEventSuccess = (responseData) => {
  $('#body-message').text('Event changed successfully')
  setTimeout(() => $('#body-message').text(''), 7000)
  $('.patch-event').hide()
  $('html, body').animate({ scrollTop: 0 }, 'fast')
}

const onClickViewBtnSuccess = (responseData) => {
  const viewEventHtml = viewEventTemplate({ event: responseData.event })
  $('.content').html(viewEventHtml)
  store.event_id = responseData.event.id
  $('html,body').scrollTop(0)
}

const onRsvpSuccess = (responseData) => {
  const email = responseData.attendee.user.email
  $('.rsvp-message').text(`${email} RSVPed successfully`)
  setTimeout(() => $('.rsvp-message').text(''), 7000)
  $('.rsvp').hide()
  $('.un-rsvp').show()
  $('#append').append(email)
}

const onUpdatePaidSuccess = (responseData) => {
  $('.paid-update').text('Hash cash is updated for this user.')
  setTimeout(() => $('.paid-update').text(''), 7000)
  $(`p:contains(${responseData.attendee.user.email})`).html(`${responseData.attendee.user.email}: ${responseData.attendee.paid}`)
}

const onUnRsvpSuccess = () => {
  $('.rsvp-message').text("You have successfully un-RSVPed. Hope you'll join us for the next one!")
  setTimeout(() => $('.rsvp-message').text(''), 7000)
  $('.rsvp').show()
  $('.un-rsvp').hide()
  $(`p:contains(${store.user.email})`).html('')
}

const onClickAddEvent = () => {
  $('.content').html(addEventTemplate)
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
  onUpdatePaidSuccess,
  onUnRsvpFailure,
  onUnRsvpSuccess,
  onClickAddEvent,
  onGetPastEventsSuccess
}
