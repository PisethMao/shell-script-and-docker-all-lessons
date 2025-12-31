FROM ubuntu
RUN apt-get update && apt-get upgrade -y
RUN echo " echo 'Hello, Docker!' " > hello.sh
RUN echo " echo 'This is a test Dockerfile.' " > test.sh
# CMD sh hello.sh
CMD ["sh", "test.sh"]