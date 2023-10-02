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


RUN npm config set registry https://repo.mci.dev/artifactory/api/npm/npm
# RUN npm config set registry https://repo.mci.dev/artifactory/api/npm/npm
RUN npm set _authToken $AUTH_TOKEN
RUN npm config fix

COPY . .

RUN mkdir -p /home/node/app/dist
RUN npm run build
EXPOSE 3000
ENTRYPOINT [ "npx", "next", "start" ]
CMD [ "-p", "3000" ]
