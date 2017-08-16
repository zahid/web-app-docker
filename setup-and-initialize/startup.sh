#!/bin/bash

# wait for database to be available
while ! nc -z database 3306;
do
    sleep 3;
done;

# Setup and populate the database
mysql --host=database --comments < "/setup-and-initialize-src/setup-database.sql"