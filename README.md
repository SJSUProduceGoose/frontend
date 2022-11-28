# Produce Goose (Frontend)

The user-interface for the Produce Goose server.

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

## Dockerfile

```bash
# Build the image
docker build --build-arg SSR_BASE_URL=http://host.docker.internal:8080/api --build-arg CLIENT_BASE_URL=/api -t produce-goose:frontend .

# Run the container
docker run -p 3000:3000 --name produce-goose-frontend produce-goose:frontend
```