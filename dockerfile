# Utiliser l'image officielle Node.js avec une version spécifique
FROM node:14 as builder

# Répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json vers le répertoire de travail
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers du projet vers le répertoire de travail
COPY . .

# Build de l'application React.js
RUN npm run build

# Configuration de l'image pour exécuter l'application
FROM nginx:alpine

# Copier les fichiers de build de l'application dans le répertoire approprié de Nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Exposer le port sur lequel votre application React.js s'exécute
EXPOSE 3000

# Configuration de Nginx pour gérer l'application React.js
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Commande pour exécuter Nginx
CMD ["nginx", "-g", "daemon off;"]

