FROM node

COPY . .

RUN npm ci

RUN npm run build

RUN npm install -g serve

CMD ["npx", "serve", "build"]