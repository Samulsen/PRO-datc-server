FROM node:20-alpine

WORKDIR /src

COPY . .

RUN npm install -g nx

RUN npm install -g pnpm

RUN pnpm install

RUN npx nx@latest init


EXPOSE 4201

CMD ["nx", "serve", "admin"]
