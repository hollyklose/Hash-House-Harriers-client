// HELPER EXAMPLE
// This helper would be used in a .handlebars file
// with the syntax {{limit title 20}}

'use strict'

const equality = (attendee, userId) => {
  if (attendee.id === userId) {
    let result = ''
    if (attendee.paid) {
      result = attendee.paid
    } else {
      result = 'Not paid'
    }
    return result
  }
}

module.exports = equality
