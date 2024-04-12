FROM node:20-alpine

WORKDIR /src

COPY . .

RUN npm install

RUN npm install -g nx

EXPOSE 4200

CMD ["nx", "serve", "ui"]
