FROM node:latest
WORKDIR /app
COPY ./ /app
RUN npm install
ENV NODE_SERVER_PORT 5000
EXPOSE $NODE_SERVER_PORT 
CMD [ "npm","start" ]