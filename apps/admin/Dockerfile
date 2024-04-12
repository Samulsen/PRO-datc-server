FROM node:20-alpine

WORKDIR /src

COPY . .

RUN npm install -g nx

RUN npm install -g pnpm

RUN pnpm install

# RUN pnpx nx@latest init

EXPOSE 4201

CMD ["nx", "serve", "admin"]
