ARG VERSION=mainline-alpine3.23-slim
FROM nginx:${VERSION}
WORKDIR /app
ADD https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPlS62zG3eTjxN_Rdam9DFJ-DQNKv55Nh7PQ&s .
WORKDIR /usr/share/nginx/html
ARG NUM=1
COPY ./nginx-${NUM}/index.html ./index.html
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]