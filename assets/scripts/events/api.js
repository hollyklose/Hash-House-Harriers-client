'use strict'

const config = require('../config')
const store = require('../store')

const getEvents = () => {
  return $.ajax({
    url: config.apiUrl + '/events',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getPastEvents = () => {
  return $.ajax({
    url: config.apiUrl + '/events',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showEvent = (id) => {
  return $.ajax({
    url: config.apiUrl + '/events/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addEvent = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/events',
    method: 'POST',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteEvent = (id) => {
  return $.ajax({
    url: config.apiUrl + '/events/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const patchEvent = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/events/' + formData.event.id,
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const rsvp = (eventId) => {
  return $.ajax({
    url: config.apiUrl + '/attendees',
    method: 'POST',
    data: {
      'attendee': {
        'user_id': store.user.id,
        'event_id': eventId,
        'paid': 0
      }
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getAttendees = () => {
  return $.ajax({
    url: config.apiUrl + '/attendees',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updatePaid = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/attendees/' + formData.attendeeId,
    method: 'PATCH',
    data: {
      'attendee': {
        'paid': formData.attendee.paid
      }
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const unRsvp = (currentAttendeeId) => {
  return $.ajax({
    url: config.apiUrl + '/attendees/' + currentAttendeeId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}


module.exports = {
  getEvents,
  addEvent,
  deleteEvent,
  patchEvent,
  showEvent,
  rsvp,
  updatePaid,
  getAttendees,
  unRsvp,
  getPastEvents
}
