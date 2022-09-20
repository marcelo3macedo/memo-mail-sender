FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN yarn

EXPOSE 3333

ENTRYPOINT [ "yarn", "dev" ]