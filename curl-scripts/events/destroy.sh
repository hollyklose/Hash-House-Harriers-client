#!/bin/bash

curl "http://localhost:4741/events/${ID}" \
--include \
--header "Authorization: Token token=${TOKEN}" \
--request DELETE

echo
