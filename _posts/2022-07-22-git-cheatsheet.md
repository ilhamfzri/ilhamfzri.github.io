---
layout: post
title: Docker Compose Cheatsheet
date: 2022-07-13 00:09:00
description: 
tags: docker cheatsheet
categories: cheatsheet
---

# Docker Compose Cheatsheet

## Basic Example
```sh
# docker-compose.yml
version: '2'

services:
  web:
    build:
    # build from Dockerfile
      context: ./Path
      dockerfile: Dockerfile
    ports:
     - "5000:5000"
    volumes:
     - .:/code
  redis:
    image: redis
```

## Example-1

```sh
version: '3'
services:
  engine-tts-dev-1:
    image: engine-tts-dev:1.15.1
    # restart: always
    network_mode: host
    env_file:
      - .env_dev
    volumes:
      - type: bind
        source: ./model
        target: /app/model
```
## Example-2
```sh
version: '3.8'
services:
  api:
    build: .
    image:engine-stt-id:1.21.12
    ports:
      - "5005:5005"
    env_file:
      - .env_dev
    command: sh run.sh
    volumes:
      - type: bind
        source: ./apps
        target: /app/apps
      - type: bind
        source: ./model
        target: /app/model
    
  worker:
    image: engine-stt-id:1.21.12
    env_file:
      - .env_dev
    command: sh run_worker.sh

    volumes:
      - type: bind
        source: ./apps
        target: /app/apps
      - type: bind
        source: ./model
        target: /app/model
```

## Commands
```sh
docker-compose start
docker-compose stop
docker-compose pause
docker-compose unpause
docker-compose ps
docker-compose up
docker-compose down
```


## Reference
### Building
```sh
web:
  # build from Dockerfile
  build: .
  args:     # Add build arguments
    APP_HOME: app
  # build from custom Dockerfile
  build:
    context: ./dir
    dockerfile: Dockerfile.dev
  # build from image
  image: ubuntu
  image: ubuntu:14.04
  image: tutum/influxdb
  image: example-registry:4000/postgresql
  image: a4bc65fd
```

### Ports
```
  ports:
    - "3000"
    - "8000:80"  # host:container
  # expose ports to linked services (not to host)
  expose: ["3000"]
```


### Commands
```sh
  # command to execute
  command: bundle exec thin -p 3000
  command: [bundle, exec, thin, -p, 3000]
  # override the entrypoint
  entrypoint: /app/start.sh
  entrypoint: [php, -d, vendor/bin/phpunit]
```

### Environment variables
```sh
  # environment vars
  environment:
    RACK_ENV: development
  environment:
    - RACK_ENV=development
  # environment vars from file
  env_file: .env
  env_file: [.env, .development.env]
```
### Dependencies
```sh
  # makes the `db` service available as the hostname `database`
  # (implies depends_on)
  links:
    - db:database
    - redis
  # make sure `db` is alive before starting
  depends_on:
    - db
 ```
### Other options
```sh
  # make this service extend another
  extends:
    file: common.yml  # optional
    service: webapp
  volumes:
    - /var/lib/mysql
    - ./_data:/var/lib/mysql
```

## Advanced features
### Labels
```sh
services:
  web:
    labels:
      com.example.description: "Accounting web app"
```

### DNS Server
```sh
services:
  web:
    dns: 8.8.8.8
    dns:
      - 8.8.8.8
      - 8.8.4.4
```

### Devices
```sh
services:
  web:
    devices:
    - "/dev/ttyUSB0:/dev/ttyUSB0"
```

### External links
```sh
services:
  web:
    external_links:
      - redis_1
      - project_db_1:mysql
```

### Network
```sh
# creates a custom network called `frontend`
networks:
  frontend:
```

### Hosts
```sh
services:
  web:
    extra_hosts:
      - "somehost:192.168.1.100"
```

### Volume
```sh
# mount host paths or named volumes, specified as sub-options to a service
  db:
    image: postgres:latest
    volumes:
      - "/var/run/postgres/postgres.sock:/var/run/postgres/postgres.sock"
      - "dbdata:/var/lib/postgresql/data"

volumes:
  dbdata:
```

### User
```sh
# specifying user
user: root
# specifying both user and group with ids
user: 0:0
```

### External Network
```sh
# join a pre-existing network
networks:
  default:
    external:
      name: frontend
```

