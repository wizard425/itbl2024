# Stage 1: Build der Angular-Anwendung
FROM node:20-alpine AS build

WORKDIR .

# Kopiere package.json und package-lock.json und installiere Abhängigkeiten
COPY package*.json ./
RUN npm install

# Kopiere den Rest des Projekts und baue die Anwendung
COPY . .
RUN npm run build --prod

# Stage 2: Serve die Anwendung mit Nginx
FROM nginx:alpine

# Kopiere das gebaute Angular-Projekt in das Nginx-Verzeichnis
COPY --from=build /dist/dist/itbl2024 /usr/share/nginx/html

# Kopiere eine angepasste Nginx-Konfiguration, falls nötig
# COPY nginx.conf /etc/nginx/nginx.conf

# Exponiere den Standard-HTTP-Port
EXPOSE 80

# Starte Nginx automatisch, wenn der Container startet
CMD ["nginx", "-g", "daemon off;"]