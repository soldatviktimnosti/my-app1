FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production  # ← Важно!

COPY app/ ./app/

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001
USER nodejs

EXPOSE 8080
CMD ["node", "app/app.js"]