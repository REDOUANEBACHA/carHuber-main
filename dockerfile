# Étape 1 : Construction de l'application React
FROM node:14.17.6 as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --silent

COPY . .

RUN npm run build


FROM nginx:1.21.3-alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
