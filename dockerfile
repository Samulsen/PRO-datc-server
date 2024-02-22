FROM node:20

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

ENV PORT=4000

EXPOSE 4000

CMD [ "yarn", "start:dev" ]