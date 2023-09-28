FROM alpine
RUN apk update && apk add nodejs npm
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
ENTRYPOINT [ "node", "./index.js" ]
