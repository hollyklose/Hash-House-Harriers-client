// HELPER EXAMPLE
// This helper would be used in a .handlebars file
// with the syntax {{limit title 20}}

'use strict'

const datePassed = (date, eventId) => {
  if (new Date() < new Date(date)) {
    const string = `<h2 class="rsvp-message"></h2>
    <button class="rsvp" data-id="${eventId}">RSVP Yes!</button>
    <button class="un-rsvp" data-id="{{event.id}}" data-date="${date}">RSVP No :(</button>`
    return string
  }
}

module.exports = datePassed
