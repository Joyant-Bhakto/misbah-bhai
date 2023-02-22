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

#FROM nginx:alpine
#
#COPY --from=builder /usr/app/config/nginx.conf /etc/nginx/conf.d/default.conf
#COPY --from=builder /usr/app/build /usr/share/nginx/html

