FROM node:16-alpine
WORKDIR /usr/src/app

COPY . ./

# building the app
RUN npm install --production --legacy-peer-deps
RUN npm install -g serve
RUN npm run build
EXPOSE 8080
WORKDIR /
# Running the app
CMD [ "serve", "-s", "/usr/src/app/build" ]

COPY --from=builder /home/ubuntu/misbah-bhai/build/ /var/www/html


