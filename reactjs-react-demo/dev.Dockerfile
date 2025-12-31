# =========================
# Stage 1: Build frontend
# =========================
FROM node:lts-alpine3.23 AS builder

WORKDIR /app

# Copy only dependency files first (better cache)
COPY package*.json ./

# Fix npm network instability (ECONNRESET)
RUN npm config set registry https://registry.npmjs.org/ \
    && npm config set fetch-retries 5 \
    && npm config set fetch-retry-mintimeout 20000 \
    && npm config set fetch-retry-maxtimeout 120000 \
    && npm install

# Copy application source
COPY src ./src
COPY public ./public

# Build frontend
RUN npm run build


# =========================
# Stage 2: Nginx production
# =========================
FROM nginx:stable-alpine3.23-perl AS production

# Replace default nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build output to nginx html directory
COPY --from=builder /app/build /usr/share/nginx/html

# Nginx listens on 80 by default
EXPOSE 8080

# Run nginx in foreground
ENTRYPOINT ["nginx", "-g", "daemon off;"]
# =========================
# End of Dockerfile
# =========================