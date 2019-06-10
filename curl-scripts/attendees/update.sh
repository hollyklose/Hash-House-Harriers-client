#!/bin/bash

curl "http://localhost:4741/attendees/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "attendee": {
      "paid": "'"${PAID}"'"
    }
  }'

echo
