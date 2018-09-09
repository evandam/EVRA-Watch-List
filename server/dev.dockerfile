# Run the service with live reloads
FROM node:alpine
ENV NODE_ENV=development
WORKDIR /usr/local/src

COPY package*.json ./
RUN npm install

CMD ["npm", "run", "dev"]
EXPOSE 3000