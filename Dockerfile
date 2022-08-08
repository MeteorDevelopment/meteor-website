FROM node:18-alpine

WORKDIR /app

COPY . .

RUN curl -fsSL https://get.pnpm.io/install.sh | sh -
RUN pnpm install
RUN pnpm build

CMD [ "PORT=82", "node", "build" ]