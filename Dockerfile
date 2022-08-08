FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

ENV PORT 82

CMD [ "node", "build" ]