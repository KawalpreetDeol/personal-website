FROM node:21-alpine as build
LABEL maintainer="Kawal"
WORKDIR /app
COPY package*.json .
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

RUN npm install -g firebase-tools

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]

