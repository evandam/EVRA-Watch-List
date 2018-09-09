# Run the server with live reloads using vue-cli
# node-sass can't use the alpine version. bummer...
FROM node
ENV NODE_ENV=development
WORKDIR /usr/local/src

COPY package*.json ./
RUN npm install

CMD ["npm", "start"]
EXPOSE 8080