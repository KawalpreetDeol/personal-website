# FROM node:21-alpine
# WORKDIR /app
# COPY package*.json ./
# RUN npm install --legacy-peer-deps
# COPY . .
# RUN npm run build

FROM jenkins/jenkins:alpine
RUN jenkins-plugin-cli \
    --plugins \
    git \
    workflow-aggregator \
    seed 
EXPOSE 8080
