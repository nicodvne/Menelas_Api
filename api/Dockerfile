FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm ci

COPY . ./
EXPOSE 8393

CMD ["npm" , "run", "start"]