FROM node:16.13.0-alpine3.13

WORKDIR /app

COPY /dist ./dist
COPY server.js .
COPY package.json .
COPY package-lock.json .

EXPOSE 3000

RUN npm install

CMD ["npm", "run", "start"]
