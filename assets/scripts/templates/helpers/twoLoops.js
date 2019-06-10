// HELPER EXAMPLE
// This helper would be used in a .handlebars file
// with the syntax {{limit title 20}}

'use strict'

const twoLoops = (users, attendees) => {
  let string = ''
  for (let i = 0; i < users.length; i++) {
    string += '<p>' + users[i]['email'] + ': ' + attendees[i]['paid'] + '</p>'
  }
  return string
}







//
// const equality = (attendee, userId, users) => {
//
//   if (attendee.id === userId) {
//     let result = ''
//     if (attendee.paid > 0) {
//       result = attendee.paid
//     } else {
//       result = 'Not paid'
//     }
//     return result
//   }
// }

module.exports = twoLoops
