FROM docker.mci.dev/node:18-alpine

## envs

RUN mkdir -p /home/node/app/node_modules

WORKDIR /home/node/app

COPY package*.json ./

# RUN npm ci

## args
ARG REPO_READONLY_USERNAME
ARG REPO_READONLY_PASSWORD
ARG AUTH_TOKEN


RUN pnpm config set registry https://repo.mci.dev/artifactory/api/npm/npm/:_authToken=$AUTH_TOKEN
# RUN npm config set registry https://repo.mci.dev/artifactory/api/npm/npm
RUN pnpm set _authToken $AUTH_TOKEN
RUN pnpm config fix
RUN pnpm ci

COPY . .

RUN mkdir -p /home/node/app/dist
RUN pnpm run build
EXPOSE 3000
ENTRYPOINT [ "npx", "next", "start" ]
CMD [ "-p", "3000" ]
