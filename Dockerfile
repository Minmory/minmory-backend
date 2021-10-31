FROM node:16

RUN npm install -g yarn --force

WORKDIR /app

COPY package*.json ./
RUN yarn
RUN yarn global add pm2

COPY . .

EXPOSE 3000

CMD ["/bin/sh", "-c", "pm2-runtime 'yarn start'"]