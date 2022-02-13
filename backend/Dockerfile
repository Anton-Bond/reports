FROM node:14
LABEL maintainer="Anton Bondarenko"
WORKDIR /app
COPY . /app
USER root
RUN npm install && chmod -R g+rwx /app
EXPOSE 3000
CMD [ "npm", "run", "dev" ]
