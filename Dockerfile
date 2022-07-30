FROM node:16-alpine

# Adding build tools to make yarn install work on Apple silicon / arm64 machines
RUN apk add --no-cache python3 g++ make
WORKDIR /app
COPY package.json .
COPY yarn.lock .
# 패키지 설치
RUN yarn

# 나머지 모두 복사
COPY . .

# 도커 컨테이너에 접근할 수 있게 포트 열어주기
EXPOSE 8080

# 앱 실행시키기
CMD [ "yarn", "serve" ]