#!/bin/bash

curl "http://localhost:4741/events/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "event": {
      "name": "'"${NAME}"'",
      "date": "'"${DATE}"'",
      "time": "'"${TIME}"'",
      "location": "'"${LOCATION}"'",
      "description": "'"${DESCRIPTION}"'",
      "hare": "'"${HARE}"'",
      "bag_car": "'"${BAGCAR}"'",
      "user_id": "'"${USERID}"'"
    }
  }'

echo
