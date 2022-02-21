FROM node:16 as node_builder
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN yarn
RUN yarn build

FROM nginxinc/nginx-unprivileged:1.21

COPY --from=node_builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]