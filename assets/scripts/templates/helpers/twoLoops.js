// HELPER EXAMPLE
// This helper would be used in a .handlebars file
// with the syntax {{limit title 20}}

'use strict'

const store = require('../../store')

const twoLoops = (users, attendees) => {
  let string = ''
  for (let i = 0; i < users.length; i++) {
    let paid = attendees[i]['paid']
    if (!paid) {
      paid = 'Not Paid'
    }
    string += '<p>' + users[i]['email'] + ': ' + paid + '</p>'
    if (store.user.hash_cash) {
      string += `<form class="update-paid" data-id="${users[i]['id']}">
      <input type="number" name="attendee[paid]" />
      <input type="submit" value="Update Paid" /></form>`
    }
  }
  return string
}

module.exports = twoLoops
