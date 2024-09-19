FROM node:20-alpine

WORKDIR /src

COPY . .

RUN npm install -g nx

RUN npm install -g pnpm

RUN pnpm install

EXPOSE 4200

CMD ["nx", "serve", "ui"]
