FROM node:16-alpine

#RUN apk add --no-cache python3 g++ make
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn
COPY . .
EXPOSE 8080
CMD [ "yarn", "serve" ]