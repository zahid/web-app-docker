#!/bin/bash

# wait for database to be available
while ! nc -z database 3306;
do
    sleep 3;
done;

# Start the api
node /api-src/api-server.js
