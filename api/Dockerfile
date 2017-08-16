FROM node:latest

RUN apt-get update && apt-get install -y \
    netcat;

COPY package.json /api-src/

WORKDIR /api-src

RUN npm install

COPY api-server.js /api-src/
COPY startup.sh /api-src/

CMD /api-src/startup.sh
