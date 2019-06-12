This front end application is for users who are runners in the Boston Hash House Harriers. Each user can create an account and log in to see past and upcoming running events. They can RSVP for an event (as long as the date is not already passed), or un-RSVP if their plans change.

Admin users called "hash cash" can update whether or not a user has paid for a given event (and how much). They are able to do this regardless of whether an event has already passed.

Technologies used: Javascript, HTML, CSS, JQuery, Handlebars, Bootstrap, Ajax

Development Process:
To start, I created a basic HTML page with the elements I wanted to manipulate and basically no formatting. After creating the signup, signin, change password and signout functionality, I went through the steps to make sure I could CRUD one single resource (events) attached to a given user. At this point, any user could see all the events, but only a given signed in user could create, edit or delete his/her own event.

Next, after updating the API on the backend, I added the ability to RSVP or un-RSVP to a given event. I made sure the RSVP could be created, read and deleted. Deleted is the equivalent of "edit" here because when a user un-RSVPs it deletes their RSVP. Once the concept of attendees was introduced I had some trouble deleting events because I wasn't properly deleting the attendees on the backend (but my frontend turned out to be okay).

Once that was working, I added a paid column after each attendee's "yes" rsvp to show if and how much they had paid for a given event. I gave certain users the admin privilege (as "Hash Cash") to udpate this column, but other users (including the logged in non-admin user) could not update this.

Finally, I went back and added CSS and images to make everything look better. I also made some last minute tweaks for usability. For instance, I made sure user changes were immediately visible to the user, in addition to user response messages.

Unsolved Problems:
There are a number of improvements I'd like to make in the future. I want to be able to sort by past versus current events, show only current events and be able to search through the text of events (or by other criteria). I want an individual user to be able to see how many events they have attended. I would like to allow an admin to see how many events all users have attended, as well as search to find out who has not paid the full amount for past or future events.

GitHub repository for the API used in this application: https://github.com/hollyklose/Hash-House-Harriers-Rails-Api

Deployed API: https://sleepy-atoll-90720.herokuapp.com/
Deployed Client side: https://hollyklose.github.io/Hash-House-Harriers-client/

Wireframe: https://i.imgur.com/fI1FWvR.jpg

User stories:
I want a centralized place to hear about running club events.
I want to advertise events I'm organizing to get people to go.
I want to see events listed in chronological order.
As the event leader, I want to be able to change the start date and location as I figure things out, but don't want anyone else to change it.
I want to see who else is going to an event.
As an admin, I want to be clear to everyone who has already paid and who still needs to.
