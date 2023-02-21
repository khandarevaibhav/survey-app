FROM node:latest
WORKDIR /app
COPY ./ /app
RUN npm install
RUN npm run build

FROM nginx:latest
COPY --from=build /app/dist/survey-app /usr/share/nginx/html
EXPOSE 80