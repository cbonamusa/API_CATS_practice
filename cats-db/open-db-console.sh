#!/bin/sh
docker exec -it cats-db_db_1 mongo -u admin -p criscats --authenticationDatabase admin catsite