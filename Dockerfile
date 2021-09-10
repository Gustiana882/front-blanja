FROM node as build-stage

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn run build

FROM nginx as production-stage

COPY --from=build-stage /app/build /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]