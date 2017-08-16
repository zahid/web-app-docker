FROM mysql:8

RUN apt-get update && apt-get install -y \
    netcat;

COPY . /setup-and-initialize-src

CMD /setup-and-initialize-src/startup.sh