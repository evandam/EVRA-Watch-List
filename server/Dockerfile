FROM node:alpine
ENV NODE_ENV=production
WORKDIR /usr/local/src

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "start"]
EXPOSE 3000