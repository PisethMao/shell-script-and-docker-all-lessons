ARG VERSION=1.22.1
FROM nginx:${VERSION}
ADD https://i.pinimg.com/736x/fc/78/a4/fc78a440442c84885bd5c1ccffac2ccc.jpg /var
WORKDIR /usr/share/nginx/html
ARG NUM=1
COPY ./nginx-${NUM}/index.html ./index.html
ENTRYPOINT ["nginx", "-g", "daemon off;"]