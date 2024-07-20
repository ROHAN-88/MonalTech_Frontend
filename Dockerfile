FROM node:lts-alpine3.18

WORKDIR /app

COPY ./package.json ./
RUN npm install

COPY . .

RUN npm install typescript

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "preview"]
