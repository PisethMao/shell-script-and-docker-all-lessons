# Stage 1: Build React app
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY src ./src
COPY public ./public
RUN npm run build

# Stage 2: Nginx for production
FROM nginx:1.25-alpine

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build output
COPY --from=builder /app/build /usr/share/nginx/html

# Fix permissions for OpenShift random UID
RUN chown -R 1001:0 /usr/share/nginx/html \
    && chmod -R g+rwX /usr/share/nginx/html \
    && chown -R 1001:0 /var/cache/nginx /var/run /var/log/nginx \
    && chmod -R g+rwX /var/cache/nginx /var/run /var/log/nginx

# Use non-root user (OpenShift will override UID, but this is good practice)
USER 1001

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
