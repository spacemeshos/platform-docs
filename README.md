# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

## Local Release Deployment

```console
yarn serve
```


This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment to Github Pages

1. Obtain a github.com personal access token with permission to deploy to https://github.com/spacemeshos/platform-docs

2. Enter
```console
GIT_USER=<Your GitHub User Name>  yarn deploy
```

3. Enter your access token when prompted.
