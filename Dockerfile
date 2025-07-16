# Create build image
FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# Create runtime image
FROM node:22-alpine

WORKDIR /app

COPY --from=build /app/build .

CMD [ "node", "." ]
