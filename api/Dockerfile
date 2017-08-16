FROM node:latest

RUN apt-get update && apt-get install -y \
    netcat;

COPY . /api-src

CMD /api-src/startup.sh