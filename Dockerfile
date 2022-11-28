# Dockerfile
FROM node:16.18.1-alpine

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
RUN npm install

# Accept argument to setup environment in build
ARG SSR_BASE_URL "/api"
ARG CLIENT_BASE_URL "/api"

ENV NUXT_BASE_URL="$SSR_BASE_URL"
ENV NUXT_PUBLIC_BASE_URL="$CLIENT_BASE_URL"
RUN echo "NUXT_BASE_URL=$NUXT_BASE_URL"
RUN echo "NUXT_PUBLIC_BASE_URL=$NUXT_PUBLIC_BASE_URL"

RUN npm run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "start" ]