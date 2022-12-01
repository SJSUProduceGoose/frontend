# Dockerfile
FROM node:16.18.1-alpine AS base

ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8

FROM base AS npm-deps

# update and install dependency
RUN apk update && apk upgrade && apk add git

FROM base AS runtime

# create destination directory
RUN mkdir -p /usr/src/npm-modules
WORKDIR /usr/src/npm-modules

# copy the app, note .dockerignore
COPY package.json .
COPY package-lock.json .

RUN npm install

RUN mkdir -p /usr/src/npm-modules/nuxt-app
WORKDIR /usr/src/npm-modules/nuxt-app

# Accept argument to setup environment in build
ARG SSR_BASE_URL "/api"
ARG CLIENT_BASE_URL "/api"

ENV NUXT_BASE_URL="$SSR_BASE_URL"
ENV NUXT_PUBLIC_BASE_URL="$CLIENT_BASE_URL"

COPY . .

RUN npm run build

EXPOSE 3000

ENV HOST=0.0.0.0
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "start" ]