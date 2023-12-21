<h1 align="center">
  Graphql Subscriptions Template
</h1>

<p align="center">
    This template is meant to be used in back-end development. 
</p>

## Requirements 
This template requires a local redis server running on `127.0.0.1:7000` . 
To set up locally do this: 

1. Spin a Redis in Docker server and cluster
```cmd
docker run -e "IP=0.0.0.0" -p 7000-7005:7000-7005 grokzen/redis-cluster:latest
```
2. Then inside the container terminal 
```cmd
redis-cli -c -p 7000
```
3. And then set protected-mode to "no"
```cmd
config set protected-mode no
```

Redis set-up finished!

## Installation

1. Clone this repository
```cmd
https://github.com/jefersoneiji/graphql-typescript-template.git
```
2. Install dependencies 
```cmd
yarn install 
```
3. To run this project execute 
```cmd
yarn start
```

## Accessing GraphiQL

Use this address
```
http://localhost:4000/graphql
```

## Docker

1. To build the image type
```cmd
docker build -t graphql-typescript-template .
```
2. Create and run containers from image
```cmd
docker run -dp 127.0.0.1:4000:4000 graphql-typescript-template
```
3. Open container in editor
For vscode, you may use the dev containers extension
```cmd
https://code.visualstudio.com/docs/devcontainers/containers
```

## Known issues

Q: After the container is opened, git may show some files as modified although nothing was changed. 

A: In this case, just discard all "changes" and you're good to go.

<hr/>

Q: My GraphiQL doesn' connect to my websocket endpoint.

A: For some reason the websocket endpoint is not connecting to the graphiql interface. Use another GraphQL client, such as Postman. 