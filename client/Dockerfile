FROM node AS builder
ENV NODE_ENV=development
WORKDIR /usr/local/src

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


FROM nginx:alpine
COPY --from=builder /usr/local/src/dist /usr/share/nginx/html